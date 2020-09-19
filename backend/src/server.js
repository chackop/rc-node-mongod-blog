import express from 'express';

const app = express();

app.get('/hello', (req, res) => res.send('Hello response!'));

app.listen(8000, () => console.log('Listening on port 8000'));
