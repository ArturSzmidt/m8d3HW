import jwt from 'jsonwebtoken';

const token = jwt.sign({ _id: '203909d2ud92u' }, 'process.env.JWT_SECRET', {
  expiresIn: '12s',
});

console.log(token);

jwt.verify(token);

const verified = jwt.verify(token, 'process.env.JWT_SECRET');
console.log(verified);
