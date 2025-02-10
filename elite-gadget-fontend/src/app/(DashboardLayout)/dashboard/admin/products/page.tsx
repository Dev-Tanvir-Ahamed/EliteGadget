"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Table, Tag } from "antd";
import { useState } from "react";

const AllProducts = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      filterSearch: true,
    },
    {
      title: "Product ID",
      dataIndex: "productId",
      key: "productId",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toLocaleString()}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Sale",
      dataIndex: "sale",
      key: "sale",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (stock) => (
        <Tag color={stock === "In Stock" ? "green" : "red"}>{stock}</Tag>
      ),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button icon={<EyeOutlined />} />
          <Button icon={<EditOutlined />} />
          <Button icon={<DeleteOutlined />} danger />
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      product: "Neptune Long-sleeve",
      productId: "#7712309",
      price: 1452.5,
      quantity: 1638,
      sale: 20,
      stock: "Out of stock",
      startDate: "08/24/2024",
    },
    {
      key: "2",
      product: "Corduroy slim-fit",
      productId: "#7712309",
      price: 1452.5,
      quantity: 1638,
      sale: 20,
      stock: "In Stock",
      startDate: "08/20/2024",
    },
    // Add more data...
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between mb-4">
        <Input
          placeholder="Search here..."
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={handleSearch}
          className="w-1/3"
        />
        <Button type="primary">+ Add New</Button>
      </div>
      <Table
        columns={columns}
        dataSource={data.filter((item) =>
          item.product.toLowerCase().includes(searchText.toLowerCase())
        )}
        pagination={{ pageSize: 10 }}
      />
    </div>
  );
};

export default AllProducts;
