import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(3333, () => {
    console.log('Server is Running on 3333');
});