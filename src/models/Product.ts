import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  stock: number;
  variants?: {
    color: string;
    size: string;
    quantity: number;
  }[];
}

const ProductSchema: Schema = new Schema(
    {
      name: { type: String, required: true },
      description: { type: String, required: true },
      category: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true }, // URL da imagem do produto principal
      stock: { type: Number, required: true },
      variants: [
        {
          color: { type: String },
          size: { type: String },
          quantity: { type: Number, required: true },
          image: { type: String }, // URL da imagem da variante
        },
      ],
    },
    { timestamps: true }
  );
  

export default mongoose.model<IProduct>('Product', ProductSchema);
