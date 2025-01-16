import { Request, Response } from 'express';
import Product from '../models/Product';
import fs from 'fs';
import path from 'path';
import 'express';

declare global {
  namespace Express {
    interface Request {
      files?: {
        [fieldname: string]: Express.Multer.File[];
      };
    }
  }
}

interface MulterFile {
  [fieldname: string]: Express.Multer.File[];
}

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
};

export const addProduct = async (req: Request, res: Response) => {
    try {
      const { name, description, category, price, stock } = req.body;
  
      const uploadsDir = path.join(__dirname, '..', 'uploads');
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir);
      }
  
      const variants = [];
  
      // Processar imagem branca
      if (req.files && req.files['image_white']) {
        const whiteImage = req.files['image_white'][0];
        const whiteImagePath = path.join(uploadsDir, whiteImage.originalname);
        fs.writeFileSync(whiteImagePath, fs.readFileSync(whiteImage.path));
        console.log('White image saved at:', whiteImagePath);
        variants.push({
          color: 'white',
          quantity: 50,
          image: `/uploads/${whiteImage.originalname}`,
        });
      }
  
      // Processar imagem preta
      if (req.files && req.files['image_black']) {
        const blackImage = req.files['image_black'][0];
        const blackImagePath = path.join(uploadsDir, blackImage.originalname);
        fs.writeFileSync(blackImagePath, fs.readFileSync(blackImage.path));
        console.log('Black image saved at:', blackImagePath);
        variants.push({
          color: 'black',
          quantity: 50,
          image: `/uploads/${blackImage.originalname}`,
        });
      }
  
      const newProduct = new Product({
        name,
        description,
        category,
        price,
        stock,
        image: variants[0]?.image || '',
        variants,
      });
  
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      console.error('Error adding product:', err);
      res.status(500).json({ message: 'Error adding product', error: err });
    }
  };
  
  