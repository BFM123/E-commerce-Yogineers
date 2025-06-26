import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

app.use("/uploads", express.static(uploadsDir));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/yogineers");

// Item schema with category
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, required: true },
  stock: { type: Number, required: true, min: 0 },
  category: { type: String, required: true },
});

const Item = mongoose.model("Item", itemSchema);

// Image upload endpoint
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});

// Add item endpoint
app.post("/api/items", async (req, res) => {
  try {
    const { name, description, price, image, stock, category } = req.body;
    if (!name || !description || !image || price == null || stock == null || !category) {
      return res.status(400).json({ error: "All fields are required." });
    }
    const item = new Item({ name, description, price, image, stock, category });
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: "Failed to add item." });
  }
});

// Get all items endpoint
app.get("/api/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(5000, () => console.log("Server running on port 5000"));