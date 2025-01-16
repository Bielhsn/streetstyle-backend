import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', 'uploads'));
  },
  filename: (req, file, cb) => {
    const originalName = file.originalname;
    cb(null, originalName); // Usa apenas o nome original
  },
});

const upload = multer({ storage });

export default upload;
