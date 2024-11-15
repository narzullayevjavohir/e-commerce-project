import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductList } from "@/constants";
import Image from "next/image";
import React from "react";

export default function ShopPage() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="min-w-96 mt-4">
        <h1 className="text-3xl mb-4">
          All of them products in ecommerce platform!
        </h1>
        <div className="flex w-full items-center space-x-2">
          <Input
            type="search"
            className="rounded"
            placeholder="Search products..."
          />
          <Button type="submit" variant={"outline"}>
            Search
          </Button>
        </div>
      </div>
      <ul className="w-full grid grid-cols-4 gap-y-4 mt-10">
        {ProductList.map((item) => (
          <li key={item.id} className="w-80 h-full flex flex-col border">
            <div className="w-full h-[70%]">
              <img
                src={`/${item.imageUrl}`}
                alt={"product-image"}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full h-[30%] flex flex-col items-start">
              <h2>{item.productName}</h2>
              <div className="flex items-center">
                <span>{item.price}</span>
                <span>{item.quantity}</span>
              </div>
              <p>{item.description}</p>
              <Button>Add to cart</Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
