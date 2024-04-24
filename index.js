const express = require('express');
const app = express();
require('dotenv').config()

const port = process.env.PORT ||3000

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/login', (req, res) => {
    res.send('you are login!');
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});