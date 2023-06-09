import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";
import "@splidejs/react-splide/css";

type Props = {};

const Carousel = (props: Props) => {
  const images = [
    {
      itemImageSrc: "https://images4.alphacoders.com/131/1313071.jpeg",
      thumbnailImageSrc: "https://images4.alphacoders.com/131/1313071.jpeg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://images.hdqwalls.com/download/deadpool-with-ford-raptor-8m-2880x1800.jpg",
      thumbnailImageSrc: "https://images4.alphacoders.com/131/1313071.jpeg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
    {
      itemImageSrc:
        "https://wallpapers.com/images/hd/ford-mustang-mach-1-muscle-car-a3xgi2ab9tdzxy6n.jpg",
      thumbnailImageSrc: "https://images4.alphacoders.com/131/1313071.jpeg",
      alt: "Description for Image 1",
      title: "Title 1",
    },
  ];

  return (
    <Splide
      className="w-full h-[80vh]"
      aria-label="My Favorite Images"
      options={{
        type: "loop",
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
      }}
    >
      {images.map((img, idx) => (
        <SplideSlide className="w-full h-[80vh] overflow-hidden" key={idx}>
          <Image
            src={img.thumbnailImageSrc}
            objectFit="cover"
            fill
            alt="Image 1"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
