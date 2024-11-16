import React, { useState } from "react";

const FormComponent = () => {
  // State to manage form inputs
  const [formValues, setFormValues] = useState({
    productName: "",
    price: "",
    color: "",
    category: "",
    description: "",
    images: null, // File input state
  });

  // State to manage errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === "file" ? files : value,
    });
  };

  // Form validation logic
  const validateForm = () => {
    const newErrors = {};
    if (!formValues.productName) newErrors.productName = "Product name is required.";
    if (!formValues.price) newErrors.price = "Price is required.";
    if (formValues.price && isNaN(Number(formValues.price)))
      newErrors.price = "Price must be a number.";
    if (!formValues.category) newErrors.category = "Category is required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Form Submitted:", formValues);
    alert("Form submitted successfully!");
    setFormValues({
      productName: "",
      price: "",
      color: "",
      category: "",
      description: "",
      images: null,
    });
    setErrors({});
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} noValidate>
        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formValues.productName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.productName ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            placeholder="Enter product name"
          />
          {errors.productName && <p className="text-red-500 text-sm">{errors.productName}</p>}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={formValues.price}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.price ? "border-red-500" : "border-gray-300"
            } rounded-md`}
            placeholder="Enter price"
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>

        {/* Color */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Color</label>
          <input
            type="text"
            name="color"
            value={formValues.color}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter product color"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            name="category"
            value={formValues.category}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${
              errors.category ? "border-red-500" : "border-gray-300"
            } rounded-md`}
          >
            <option value="">Select category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Enter product description"
          />
        </div>

        {/* Images */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Images</label>
          <input
            type="file"
            name="images"
            onChange={handleChange}
            className="w-full"
            multiple
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
