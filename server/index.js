
import express from 'express';
import dotenv from 'dotenv';
import generateAccessToken from './generateAccessToken';
import createChannel from './createChannel';
import bodyParser from 'body-parser';

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.post('/token', (req, res) => res.send(generateAccessToken(req.body.identity)));
app.post('/channel', async (req, res) => res.send(await createChannel(req.body.displayName)));

app.listen(3000, () => {
    console.log(`Server ready at http://localhost:3000`);
});

