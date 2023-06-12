import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import React from "react";
import "@splidejs/react-splide/css";
import { useRouter } from "next/router";

type Props = { banners: any };

const Carousel = ({ banners }: Props) => {
  const router = useRouter();
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
      {banners?.map((banner: any, idx: number) => (
        <SplideSlide
          className="w-full h-[80vh] overflow-hidden cursor-pointer"
          key={idx}
          onClick={() => router.push(`/tin-tuc/${banner?.slug}`)}
        >
          <Image src={banner?.thumbnail?.[0]} objectFit="cover" fill alt="Image 1" />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
