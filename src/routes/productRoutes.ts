import express from 'express';
import { getAllProducts, addProduct } from '../controllers/productController';
import upload from '../config/uploadConfig';

const router = express.Router();

router.get('/products', getAllProducts);

router.post(
  '/products',
  (req, res, next) => {
    const uploadMiddleware = upload.fields([
      { name: 'image_white', maxCount: 1 },
      { name: 'image_black', maxCount: 1 },
    ]);

    uploadMiddleware(req, res, (err) => {
      if (err) {
        console.error('Multer error:', err);
        return res.status(400).json({ message: 'File upload error', error: err });
      }
      next();
    });
  },
  addProduct as express.RequestHandler
);

export default router;
