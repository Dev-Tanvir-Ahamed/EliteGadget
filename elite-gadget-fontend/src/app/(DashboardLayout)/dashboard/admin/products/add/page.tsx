"use client";

import ColorSelector from "@/components/Form/ColorSelector";
import EliteForm from "@/components/Form/EliteForm";
import UploadForm from "@/components/Form/ImageUpload";
import InputForm from "@/components/Form/InputForm";
import { SelectForm } from "@/components/Form/SelectForm";
import SizeSelector from "@/components/Form/SizeSelector";
import TextareaForm from "@/components/Form/TextAreaForm";
import { Button, message } from "antd";
import axios from "axios";
import { FieldValues } from "react-hook-form";

const AddProductForm = () => {
  const colors = ["Orange", "Blue", "Red"];
  const sizes = ["S", "M", "L", "XL"];
  // Default form values
  const defaultValues = {
    title: "Sample Product",
    category: "electronics",
    price: 100,
    salePrice: 80,
    brand: "brand1",
    colors: ["Red"], // Default selected color
    sizes: ["M"], // Default selected size
    sku: "SKU12345",
    stock: "inStock",
    description: "This is a sample product description.",
    images: [],
  };
  const handleSubmit = async (values: FieldValues) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/products",
        values
      );
      if (response.status === 201) {
        message.success("Product added successfully!");
      } else {
        message.error("Failed to add product.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("An error occurred while adding the product.");
    }
  };

  return (
    <div className="bg-white text-black p-6 rounded-xl shadow-lg max-w-4xl mx-auto">
      <EliteForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <div className="mb-6">
          <UploadForm
            name="images"
            multiple
            listType="picture-card"
            buttonText="Upload Images"
          />
          <p className="text-gray-600 text-sm mt-2">
            You need to add at least 4 images. Pay attention to the quality of
            the pictures you add.
          </p>
        </div>

        <div className="space-y-6">
          {/* Product Title */}
          <InputForm
            placeholder="Enter title"
            name="title"
            required
            className="bg-gray-100 border border-gray-300 text-black"
          />
          <p className="text-gray-600 text-xs">Do not exceed 60 characters.</p>

          {/* Category */}
          <SelectForm
            name="category"
            placeholder="Choose category"
            className="w-full bg-gray-100 text-black"
            options={[
              { value: "electronics", label: "Electronics" },
              { value: "fashion", label: "Fashion" },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <InputForm
              name="price"
              placeholder="Price"
              type="number"
              className="bg-gray-100 border border-gray-300 text-black"
            />
            {/* Sale Price */}
            <InputForm
              name="salePrice"
              placeholder="Sale Price"
              type="number"
              className="bg-gray-100 border border-gray-300 text-black"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Brand */}
            <SelectForm
              name="brand"
              placeholder="Choose brand"
              className="w-full bg-gray-100 text-black"
              options={[
                { value: "brand1", label: "Brand 1" },
                { value: "brand2", label: "Brand 2" },
              ]}
            />
          </div>

          {/* Colors */}
          {/* Colors */}
          <ColorSelector name="colors" colors={colors} />

          {/* Sizes */}
          <SizeSelector name="sizes" sizes={sizes} />

          {/* SKU */}
          <InputForm
            name="sku"
            placeholder="Enter SKU"
            className="bg-gray-100 border border-gray-300 text-black"
          />

          {/* Stock */}
          <SelectForm
            name="stock"
            placeholder="Enter Stock"
            className="w-full bg-gray-100 text-black"
            options={[
              { value: "inStock", label: "In Stock" },
              { value: "outOfStock", label: "Out of Stock" },
            ]}
          />
          {/* Description */}
          <TextareaForm
            placeholder="Short description about product"
            name="description"
            row={4}
            className="bg-gray-100 border border-gray-300 text-black"
          />
          <p className="text-gray-600 text-xs">Do not exceed 100 characters.</p>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <Button danger>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
          </div>
        </div>
      </EliteForm>
    </div>
  );
};

export default AddProductForm;
