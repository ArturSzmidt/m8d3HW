import express from 'express';

import fs from 'fs';

import uniqid from 'uniqid';

import path, { dirname } from 'path';

import { fileURLToPath } from 'url';

import createError from 'http-errors';

import { parseFile } from '../utils/upload/index.js';

import AuthorsModel from './schema.js';

import { generateCSV } from '../utils/csv/index.js';

import { basicAuthMiddleware, JWTAuthMiddleware } from '../auth/basic.js';

import { JWTAuthenticate } from '../auth/tools.js';

const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);

const authorsFilePath = path.join(__dirname, 'authors.json');

const router = express.Router();

// get all authors
router.get('/', JWTAuthMiddleware, async (req, res, next) => {
  //JWTmiddlewere
  try {
    const users = await AuthorsModel.find();
    console.log(users);
    res.send(users);
  } catch (error) {
    res.sendStatus(500);
  }
});
router.get('/me', basicAuthMiddleware, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (error) {
    console.log(error);
    next();
  }
});

router.put('/me', basicAuthMiddleware, async (req, res, next) => {
  try {
    req.user.name = 'Whatever'; // modify req.user with the fields coming from req.body
    await req.user.save();

    res.send();
  } catch (error) {
    next(error);
  }
});

router.delete('/me', basicAuthMiddleware, async (req, res, next) => {
  try {
    await req.user.deleteOne();
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

// create  author
router.post('/', basicAuthMiddleware, async (req, res, next) => {
  console.log('here');
  try {
    const author = new AuthorsModel(req.body);
    const { _id } = await author.save();
    res.send({ _id });
  } catch (error) {
    console.log({ error });
  }
});
router.post('/register', async (req, res, next) => {
  console.log('here');
  try {
    const author = new AuthorsModel(req.body);
    const { _id } = await author.save();
    res.send({ _id });
  } catch (error) {
    console.log({ error });
  }
});

// get single authors
router.get('/:id', async (req, res, next) => {
  try {
    const author = await Authors.findById(req.params.id);
    if (!author) {
      res
        .status(404)
        .send({ message: `Author with ${req.params.id} is not found!` });
    } else res.send(author);
  } catch (error) {
    res.send(500).send({ message: error.message });
  }
});

// delete  author
router.delete('/:id', async (req, res, next) => {
  try {
    const author = Authors.findById(req.params.id);
    if (!author) {
      res
        .status(404)
        .send({ message: `Author with ${req.params.id} is not found!` });
    }
    await Authors.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.send(500).send({ message: error.message });
  }
});

//  update author
router.put('/:id', async (req, res, next) => {
  try {
    const changedAuthor = await Authors.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(changedAuthor);
  } catch (error) {
    res.send(500).send({ message: error.message });
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await AuthorsModel.checkCredentials(email, password);

    if (user) {
      const accessToken = await JWTAuthenticate(user);

      res.send({ accessToken });
    } else {
      next(createError(401, 'Credentials not valid!'));
    }
  } catch (error) {
    next(error);
  }
});

export default router;
