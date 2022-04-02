import express from 'express';

import { apiController } from '../src/routes';

const app = express();

app.use(express.json())
app.use(express.static('public'))
app.use('/api', apiController)

export default app
