import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import Image from "next/image";
import { formatNumber } from "@/common/function";

type Props = {
  bestSellerList: any;
};

const BestSeller = ({ bestSellerList }: Props) => {
  const minPrice = (item: any) => {
    if (!item) {
      return 0;
    }
    const group = bestSellerList.filter((e: any) => e.group === item.group);
    const mapClassification = group.flatMap(
      (e: any) => e.productClassification
    );
    const sortedPrice = mapClassification.sort(
      (a: any, b: any) => a.price - b.price
    );

    return sortedPrice[0].price;
  };

  return (
    <div className="flex flex-col gap-7">
      <div className="line-section"></div>
      <span className="font-medium text-4xl w-full p-4 text-center block">
        Sản phẩm bán chạy
      </span>
      <Splide
        className="w-full h-80 lg:px-10 px-0"
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          autoplay: true,
          interval: 5000,
          pauseOnHover: true,
          perPage: 3,
          mediaQuery: "max",
          breakpoints: {
            1280: {
              perPage: 2,
            },
            888: {
              perPage: 1,
            },
          },
          pagination: false,
        }}
      >
        {bestSellerList?.map((item: any, idx: number) => (
          <SplideSlide
            className="w-full h-[300px] overflow-hidden lg:px-7 px-0"
            key={idx}
          >
            <div
              key={idx}
              className="transform h-[300px] overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300"
            >
              <div className="w-full h-36 relative">
                <Image
                  className="h-36 w-full object-contain"
                  src={item.productClassification[0].images[0]}
                  alt="Product Image"
                  fill
                />
              </div>
              <div className="p-4 h-[156px] flex flex-col justify-between">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  {item.productName}
                </h2>
                <div className="flex items-center">
                  <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {formatNumber(minPrice(item))}
                  </p>
                  <a
                    href="tel:0988765053"
                    className="ml-auto font-medium text-white rounded bg-red-400 hover:bg-red-500 px-3 py-1 transition-all duration-300"
                  >
                    Liên hệ ngay
                  </a>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default BestSeller;
