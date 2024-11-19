"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductList } from "@/constants";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(ProductList);
  const searchProducts = () => {
    const query = searchQuery.toLowerCase();
    const filtered = ProductList.filter(
      (item) =>
        item.productName.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="min-w-96 mt-4">
        <h1 className="text-3xl mb-4">
          All of them products in ecommerce platform!
        </h1>
        <div className="flex w-full items-center space-x-2">
          <Input
            type="search"
            className="rounded"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              searchProducts();
            }}
          />
          <Button
            type="button"
            variant={"outline"}
            className="hover:bg-black hover:text-white"
            onClick={searchProducts}
          >
            Search
          </Button>
        </div>
      </div>
      <ul className="w-full grid grid-cols-4 gap-y-4 my-10 place-items-center">
        {filteredProducts.map((item) => (
          <li
            key={item.id}
            className="w-80 h-full flex flex-col border rounded-xl"
          >
            <div className="w-full h-[65%]">
              <img
                src={`/${item.imageUrl}`}
                alt={"product-image"}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-[35%] flex flex-col px-3">
              <h2 className="text-2xl font-bold mb-2">{item.productName}</h2>
              <div className="flex flex-col">
                <div>
                  Price: <span className="font-bold">{item.price}$</span>
                </div>
                <div>
                  Quantity: <span className="font-bold">{item.quantity}</span>
                </div>
              </div>
              <p className="font-semibold">{item.description}</p>
              <Button>Add to cart</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
