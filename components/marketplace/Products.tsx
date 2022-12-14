import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { products } from "../../data/products";

const Products = () => {
  return (
    <main className="mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mx-auto">
        {products.map((product) => {
          return (
            <Card key={product.id} className="card">
              <Link href={`/marketplace/${product.name.toLocaleLowerCase()}`}>
                <img
                  src={product.image.src}
                  alt={product.name}
                  className="cursor-pointer"
                  loading="lazy"
                />
              </Link>
              <div className="flex justify-between">
                <h5 className="font-satoshi text-grey font-normal text-base">
                  {product.name}
                </h5>
                <p className=" md:font-bold text-grey font-satoshi text-base">
                  ${product.price}0
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </main>
  );
};

export default Products;
