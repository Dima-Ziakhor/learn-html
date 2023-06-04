import 'pg';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { themeRouter } from './routes/themeRouter.js';
import { paragraphRouter } from './routes/paragraphRouter.js';
import { tagRouter } from './routes/tagRouter.js';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(themeRouter);
app.use(paragraphRouter);
app.use(tagRouter);
app.get('/', (req, res) => {
  res.send('Hello!');
});
app.listen(PORT);

export default app;
