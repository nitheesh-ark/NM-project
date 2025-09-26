import express from 'express';
import dotenv from 'dotenv';
import questionsRouters from './routers/questionsRouters.js'
import { connectDB } from './config/db.js';



dotenv.config();
const app = express();
app.use(express.json());
app.use('/api/admin/', questionsRouters);
const PORT = process.env.PORT || 3000;

connectDB().then(
    app.listen(PORT,() => {
        console.log(`server is running on PORT - ${PORT}`);          // --- production level techniquies
    })
).catch((err) => {
    console.log("server is not connected to the db", err);
})


