import jwt from 'jsonwebtoken';
import { resolve } from 'path';
import { promisify } from 'util';

export const JWTAuthenticate = async (user) => {
  const accessToken = await generateJWT({ _id: user._id });

  return accessToken;
};

const generateJWT = (payload) =>
  new Promise((resolve, reject) =>
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1 week' },
      (err, token) => {
        if (err) {
          reject(err);
        } else {
          resolve(token);
        }
      }
    )
  );

// generateJWT()
//   .then((token) => console.log(token))
//   .catch((err) => console.log(err));

export const verifyJWT = (token) =>
  new Promise((resolve, reject) =>
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) reject(err);
      resolve(decodedToken);
    })
  );

// const promisifyJWTSign = promisify(jwt.sign)

// promisifyJWTSign(payload,process.env.JWT_SECRET, {}, (err, token)).then()
