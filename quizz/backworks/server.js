import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';    // --- production level techniquies

import questionsRouters from './routers/questionsRouters.js'
import { connectDB } from './config/db.js';

dotenv.config();
const app = express();

app.use(cors())
app.use(express.json());
app.use('/api/admin/quess', questionsRouters);

const PORT = process.env.PORT || 3000;

connectDB().then(
    app.listen(PORT,"0.0.0.0",() => {
        console.log(`server is running on PORT - ${PORT}`);          // --- production level techniquies
    })
).catch((err) => {
    console.log("server is not connected to the db", err);
})


