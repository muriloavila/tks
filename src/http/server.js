import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import middleware from './middleware';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(middleware);


app.use(routes);

app.listen(3003, () => {
    console.log('Server is Running on 3003');
});