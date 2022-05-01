import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Olá, docker meu filho cadê você ?');
});

app.listen(3000);
