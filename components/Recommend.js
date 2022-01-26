import Image from "next/image";
import Link from "next/link";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Recommend({ name }) {
  const recommedData = [
    {
      id: 1,
      src: "/images/image8.jpg",
      desription:
        "おいもさんが大好きなあなた！安納芋と鳴門金時の贅沢な味わい。食べれば納得、女性に人気のおいもさんのミルクレープロール",
      price: "2,556円(税189円)",
    },
    {
      id: 2,
      src: "/images/image6.jpg",
      desription: "濃厚で味わい深いチョコと定番人気のプレーンのセット",
      price: "3,802円(税282円)",
    },
    {
      id: 3,
      src: "/images/image5.jpg",
      desription:
        "【季節限定】ミルクレープロールの真ん中にチョコレートを入れてます！チョコレート好きの方にもぜひお食べいただきたい濃厚なチョコレート味です",
      price: "2,556円(税189円)",
    },
  ];
  return (
    <section className="flex-col mt-10">
      <div className="flex justify-center items-center">
        <h1 className="text-2xl font-medium"> {name}</h1>
      </div>
      <Slide autoplay={false} easein="true">
        <div className="mt-10 p-1 grid  grid-cols-1 md:grid-cols-3">
          {recommedData.map((item) => (
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
                    className="opacity-90 rounded-md"
                    key={item.id}
                  />
                </div>
              </Link>
              <div className="flex-cols">
                <div className="mt-3">
                  <Link href={`/item/${item.id}`}>
                    <h1
                      className="tracking-wide  
                    font-medium text-lg text-gray-900 cursor-pointer hover:underline"
                    >
                      {item.desription}
                    </h1>
                  </Link>
                </div>
                <div className="flex justify-center items-center mt-1">
                  <p className="text-gray-700 p-1 text-lg tracking-wider">
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
}
