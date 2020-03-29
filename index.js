import express from 'express';

// eslint-disable-next-line import/first
import { User } from './src/db/model';

const app = express();

// migration commands - only execute if for the first time you are building the db
// User.sync();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 8000!');
});
