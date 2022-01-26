import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Hero() {
  const bannerImage = [
    {
      id: 1,
      src: "/images/banner2.png",
      layout: "fill",
      objectFit: "cover",
    },
    {
      id: 2,
      src: "/images/image2.jpg",
      layout: "fill",
      objectFit: "cover",
    },
  ];

  const smallImages = [
    {
      id: 3,
      src: "/images/image1.jpg",
      layout: "fill",
      objectFit: "cover",
    },
    {
      id: 4,
      src: "/images/image2.jpg",
      layout: "fill",
      objectFit: "cover",
    },
    {
      id: 5,
      src: "/images/image3.jpg",
      layout: "fill",
      objectFit: "cover",
    },
    {
      id: 6,
      src: "/images/image4.jpg",
      layout: "fill",
      objectFit: "cover",
    },
    {
      id: 7,
      src: "/images/image5.jpg",
      layout: "fill",
      objectFit: "cover",
    },
    {
      id: 8,
      src: "/images/image6.jpg",
      layout: "fill",
      objectFit: "cover",
    },
  ];

  return (
    <div
      className="mt-1 h-[40rem] md:h-[45rem] lg:h-[50rem] xl:h-[60rem] 2xl:h-[65rem] 
    w-[100] flex-col"
    >
      <Fade arrows={false}>
        {bannerImage.map((item) => (
          <div
            className="relative 
      h-72 md:h-[30rem] lg:h-[35rem]  w-[100] 
     "
            key={item.id}
          >
            <Image
              src={item.src}
              layout={item.layout}
              objectFit={item.objectFit}
              alt="logo"
              className="opacity-90 fade-in"
              key={item.id}
            />
          </div>
        ))}
      </Fade>

      <Slide autoplay={false} easein="true">
        <div
          className="grid  grid-flow-col-dense grid-cols-2 md:grid-cols-3 
        grid-rows-1 h-[10rem] md:h-[15rem]"
        >
          {smallImages.map((item) => (
            <div className="row-span-3 relative  mt-1   " key={item.id}>
              <Image
                src={item.src}
                layout={item.layout}
                objectFit={item.objectFit}
                alt="logo"
                className="opacity-90"
                key={item.id}
              />
            </div>
          ))}
        </div>
      </Slide>
    </div>
  );
}
