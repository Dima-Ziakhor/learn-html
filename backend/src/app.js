import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(PORT);

export default app;
