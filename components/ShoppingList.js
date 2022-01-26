import Image from "next/image";
import React from "react";

export default function ShoppingList() {
  const item = [
    {
      id: 9,
      src: "/images/image5.jpg",
      desription:
        "【季節限定】ミルクレープロールの真ん中にチョコレートを入れてます！チョコレート好きの方にもぜひお食べいただきたい濃厚なチョコレート味です",
      price: "2,556円(税189円)",
    },
  ];

  return (
    <div className="w-full h-full rounded-md shadow-md">
      <div className="grid grid-cols-6">
        <div className="flex flex-col col-span-2">
          <div className="h-18 border p-1 bg-gray-200">
            <h1
              className="flex justify-center items-center
             h-full whitespace-nowrap"
            >
              商品名
            </h1>
          </div>
          <div className="h-full flex relative">
            <div className=" flex justify-center items-center mx-3">
              <Image src={item[0].src} height={500} width={500} />
            </div>

            <p
              className="hidden md:flex justify-center 
            items-center underline text-blue-600"
            >
              {item[0].desription}
            </p>
          </div>
          <div className="border-t h-20 bg-gray-200"></div>
        </div>

        <div className="flex flex-col">
          <div className="h-18 border p-1 bg-gray-200">
            <h1 className="flex justify-center items-center h-full whitespace-nowrap">
              販売価格
            </h1>
          </div>
          <div className="h-full flex relative">
            <div className="flex justify-center items-center mx-3">
              <p
                className="flex justify-end 
            items-center"
              >
                {item[0].price}
              </p>
            </div>
          </div>
          <div className="border-t h-20 bg-gray-200"></div>
        </div>

        <div className="flex flex-col">
          <div className="h-18 border p-1 bg-gray-200">
            <h1
              className="flex justify-center 
            items-center h-full whitespace-nowrap"
            >
              数量
            </h1>
          </div>
          <div className="h-full  w-full">
            <div className="flex justify-end items-center mx-3 h-full">
              <p
                className="flex justify-center w-full
            items-center"
              >
                1
              </p>
            </div>
          </div>
          <div className="border-t h-20 flex justify-center items-center bg-gray-200">
            <p className="h-full w-full flex items-center border-r justify-center whitespace-nowrap">
              商品合計{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="h-18 border p-1 bg-gray-200">
            <h1 className="flex justify-center items-center h-full whitespace-nowrap">
              変更{" "}
            </h1>
          </div>
          <div className="h-full  w-full">
            <div className="flex justify-end items-center mx-3 h-full">
              <p
                className="flex justify-center w-full
            items-center"
              >
                削除
              </p>
            </div>
          </div>
          <div className="border-t h-20"></div>
        </div>

        <div className="flex flex-col">
          <div className="h-18 border p-1 bg-gray-200">
            <h1 className="flex justify-center items-center h-full whitespace-nowrap">
              小計{" "}
            </h1>
          </div>
          <div className="h-full  w-full">
            <div className="flex justify-end items-center mx-3 h-full">
              <p
                className="flex justify-center w-full
            items-center"
              >
                {item[0].price}
              </p>
            </div>
          </div>
          <div className="border-t h-20 flex justify-center items-center">
            <p className="h-full flex items-center">{item[0].price} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
