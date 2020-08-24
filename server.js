import { helloRouter } from './routers/HelloRouter.js';
import { contactRouter } from './routers/ContactRouter.js';

import express from 'express';

const app = express();
app.use(express.json());

app.use('/api', helloRouter);
app.use('/api', contactRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
