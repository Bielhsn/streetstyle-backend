# StreetStyle - Back-end

This is the repository for the **StreetStyle** project's back-end, a complete e-commerce platform. The back-end was developed using **Node.js** and **TypeScript**, with integration to the **MongoDB** database. It provides an API for product management and supports image uploads.

---

## 📚 Architecture

- **Main Framework:** [Express.js](https://expressjs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **ORM:** [Mongoose](https://mongoosejs.com/)
- **File Uploads:** [Multer](https://github.com/expressjs/multer)
- **Environment Management:** [dotenv](https://github.com/motdotla/dotenv)

### Project Structure

```plaintext
src/
├── config/
│   ├── db.ts                  # MongoDB connection configuration
│   ├── uploadConfig.ts        # File upload configuration with Multer
├── controllers/
│   ├── productController.ts   # Business logic for products
├── models/
│   ├── Product.ts             # Schema and model for products in MongoDB
├── routes/
│   ├── productRoutes.ts       # Routes related to products
├── uploads/                   # Folder where images are stored locally
├── app.ts                     # Express app configuration
├── server.ts                  # Server initialization
```

---

## 🚀 Features

- **Product Management:**
  - Add new products.
  - Update existing product information.
  - Delete products.
  - List all products.

- **Image Uploads:**
  - Upload product images using **Multer**.

- **Database:**
  - CRUD operations for products stored in **MongoDB** using **Mongoose**.

---

## 🛠️ Dependencies

### Main Dependencies:
- `body-parser`: Request body parser.
- `cors`: Allows requests from different origins.
- `dotenv`: Environment variable management.
- `express`: Main framework for API creation.
- `mongodb` and `mongoose`: MongoDB connection and data manipulation.
- `multer`: File upload management.

### Development Dependencies:
- `@types/cors`, `@types/express`, `@types/multer`, `@types/node`: Type definitions for use with TypeScript.
- `ts-node-dev`: Automatically restarts the server during development.
- `typescript`: Superset of JavaScript for static typing.

---

## 🧪 Testing

- **Testing Tool:** [Postman](https://www.postman.com/)
- You can import and test the endpoints directly using Postman.
- Make sure the server is running with the command:
  ```bash
  npm run dev
  ```

---

## 📦 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/streetstyle-backend.git
   cd streetstyle-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file at the project root with the following variables:
   ```
   MONGO_URI=<your-MongoDB-URI>
   PORT=5000
   ```

4. Start the server in development mode:
   ```bash
   npm run dev
   ```

5. Access the API at `http://localhost:5000`.

---

## 🌐 Main Endpoints

### **Products**
- **GET** `/api/products`: Lists all products.
- **POST** `/api/products`: Adds a new product.
- **PUT** `/api/products/:id`: Updates an existing product.
- **DELETE** `/api/products/:id`: Deletes a product.

### **Uploads**
- **POST** `/api/products/upload`: Uploads product images.

---

## 📚 Next Steps

- **Sign-Up and Login:**
  - Implement sign-up and login for customers and administrators.
  - Set up authentication with **JWT** integration.

- **Social Login Integration:**
  - Add support for login with **Google** and **Apple**.

---

## 📚 Future Improvements

- Add activity logs for traceability.
- Implement advanced data validations.
- Integrate with cloud storage services (e.g., AWS S3).
- Create endpoints for order and payment management.

---
