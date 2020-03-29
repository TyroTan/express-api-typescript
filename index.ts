// / <reference types="./src/db/model" />

import express from 'express';

import { User } from './src/db/model/index';

const app = express();

// migration commands - only execute if first time building the db
// User.sync();

app.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    console.log('users', users);
    res.send('Hello World!');
  } catch (e) {
    console.log('error e', e);
    res.send('Something went wrong!');
  }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
