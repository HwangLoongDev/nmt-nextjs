import Image from "next/image";
import React from "react";
import { ArrowRight } from "react-feather";

type Props = {
  newsList: any;
};

const News = ({ newsList }: Props) => {
  return (
    <div className="flex flex-col gap-7">
      <div className="line-section"></div>
      <span className="font-medium text-4xl w-full p-4 text-center block">
        Tin tức - sự kiện
      </span>

      <div className="flex flex-wrap w-full justify-center">
        {newsList?.map((item: any, idx: number) => (
          <div key={idx} className="lg:w-1/3 w-full p-3">
            <div className="flex flex-col sm:flex-row lg:flex-col bg-white w-full shadow-md border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="w-full h-72 max-h-72 relative">
                <Image
                  className="rounded-t-lg w-100%"
                  src={item.thumbnail[0]}
                  fill
                  alt={item.title}
                />
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-2 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <div
                  className="mb-3"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                ></div>
                <a
                  href="#"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Xem chi tiết&nbsp;
                  <ArrowRight />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
