import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import connectDB from './config/db';
import productRoutes from './routes/productRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/uploads', (req, res, next) => {
    console.log('Requesting:', req.originalUrl);
    next();
  }, express.static(path.join(__dirname, 'uploads')));
  
// Servir arquivos estáticos
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
console.log('Serving static files from:', path.join(__dirname, 'uploads'));


// Rotas
app.use('/api', productRoutes);

// Iniciar conexão com o MongoDB
connectDB();

export default app;
