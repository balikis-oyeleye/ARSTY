import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Products = ({ products }: Products) => {
  return (
    <main className="mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-6 mx-auto">
        {products.map((product) => {
          return (
            <Card key={product.id} className="card">
              <Link
                passHref
                legacyBehavior
                href={`/marketplace/${product.name.toLocaleLowerCase()}`}
              >
                <a href="">
                  <img
                    src={product.image.src}
                    alt={product.name}
                    className="cursor-pointer max-h-[280px] min-h-[280px]"
                    loading="lazy"
                  />
                </a>
              </Link>
              <div className="flex justify-between">
                <h5 className="font-satoshi text-grey font-normal text-base">
                  {product.name}
                </h5>
                <p className=" md:font-bold text-grey font-satoshi text-base">
                  ${product.price.toFixed(2)}
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
