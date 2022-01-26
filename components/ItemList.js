import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ItemList({ item }) {
  return (
    <div className="flex-cols mx-2  " key={item.id}>
      <Link href={`/item/${item.id}`}>
        <div
          className="row-span-3 relative 
      grid-rows-1 h-[20rem] flex-cols cursor-pointer"
          key={item.id}
        >
          <Image
            src={item.src}
            layout="fill"
            objectFit="cover"
            alt="logo"
            className="opacity-90"
            key={item.id}
          />
        </div>
      </Link>
      <div className="flex-cols">
        <div className="mt-3">
          <h1
            className="tracking-wide  
        font-medium text-lg text-gray-900 cursor-pointer hover:underline"
          >
            <Link href={`/item/${item.id}`}>{item.desription}</Link>
          </h1>
        </div>
        <div className="flex justify-center items-center mt-1">
          <p className="text-gray-700 p-1 text-lg tracking-wider">
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
}
