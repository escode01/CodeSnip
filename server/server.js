import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv'

import snippetRoutes from './routes/snippets.js';
import Snippet from './models/Snippet.js';

const app = express();
dotenv.config()
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors())
// Routes
app.use('/snippets', snippetRoutes);

// Start the server

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser :true,
    useUnifiedTopology: true
})
.then ( () => app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}) )
.catch ((e) => console.log(e.message));



  
  