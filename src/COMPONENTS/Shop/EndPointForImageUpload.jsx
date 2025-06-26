import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});
const upload = multer({ storage });

app.use("/uploads", express.static("uploads"));

// Image upload endpoint
app.post("/api/upload", upload.single("image"), (req, res) => {
  res.json({ imageUrl: `/uploads/${req.file.filename}` });
});