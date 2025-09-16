import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { ENV } from './config/env.js';

const app = express();
const PORT =ENV.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });