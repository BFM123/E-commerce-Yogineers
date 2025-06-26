import React, { useState } from "react";

const categories = [
  "Electronics",
  "Home Appliances",
  "Audio & Video",
  "Electric Vehicles",
  "Fashion",
  "Books",
  "Groceries/Supermarket",
  "Pharmaceauticals",
];

const AddItemForm = ({ onItemAdded }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    stock: "",
    category: categories[0],
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = form.image;

    // If a file is selected, upload it
    if (imageFile) {
      setUploading(true);
      const data = new FormData();
      data.append("image", imageFile);
      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: data,
      });
      const img = await res.json();
      imageUrl = img.imageUrl;
      setUploading(false);
    }

    const res = await fetch("http://localhost:5000/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
        image: imageUrl,
      }),
    });
    const data = await res.json();
    onItemAdded(data);
    setForm({
      name: "",
      description: "",
      price: "",
      image: "",
      stock: "",
      category: categories[0],
    });
    setImageFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 max-w-lg mx-auto">
      <h2 className="font-bold mb-4 text-lg">Add New Product</h2>
      <div className="mb-3">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="block w-full p-2 border rounded" />
      </div>
      <div className="mb-3">
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required className="block w-full p-2 border rounded" />
      </div>
      <div className="mb-3">
        <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" required className="block w-full p-2 border rounded" />
      </div>
      <div className="mb-3">
        <input name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" type="number" required className="block w-full p-2 border rounded" />
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Category</label>
        <select name="category" value={form.category} onChange={handleChange} className="block w-full p-2 border rounded" required>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="block mb-1 font-medium">Image (Upload or URL)</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="block mb-2" />
        <span className="block text-center text-gray-500 mb-2">or</span>
        <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" className="block w-full p-2 border rounded" />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full" disabled={uploading}>
        {uploading ? "Uploading..." : "Add Product"}
      </button>
    </form>
  );
};

export default AddItemForm;