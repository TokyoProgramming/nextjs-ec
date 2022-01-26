import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MyComponent = () => {
  const images = [
    {
      id: 1,
      src: "/images/banner.jpg",
      layout: "fill",
      objectFit: "cover",
    },
    {
      id: 2,
      src: "/images/banner2.png",
      layout: "fill",
      objectFit: "cover",
    },
  ];

  return (
    <div>
      <Carousel infiniteLoop={true} autoPlay={true} interval={5000}>
        {images.map((item) => (
          <div className="h-[50rem] " key={item.id}>
            <Image
              src={item.src}
              layout={item.layout}
              objectFit={item.objectFit}
              alt="logo"
              className="opacity-90 fade-in"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MyComponent;
