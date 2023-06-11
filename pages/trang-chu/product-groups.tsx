import Image from "next/image";
import React, { useState } from "react";
import { formatNumber } from "@/common/function.js";
import Link from "next/link";
import DialogComponent from "../components/dialog/dialog";

type Props = {
  allProducts: any;
  listProductFilterByGroup: any;
};

const ProductGroups = ({ listProductFilterByGroup, allProducts }: Props) => {
  const [quickView, setQuickView] = useState<boolean>(false);
  const [quickViewData, setQuickViewData] = useState<any>(undefined);
  const [productSelected, setProducSelected] = useState<any>(undefined);
  const [prodSameGroup, setProdSameGroup] = useState<any>(undefined);

  const btnQuickViewClick = (item: any) => {
    setQuickViewData(item);
    setProducSelected(item.productClassification[0]);
    const filterProd = allProducts.filter(
      (e: any) => e.group.id === item.group.id && e.id !== item.id
    );
    setProdSameGroup(filterProd);
    setQuickView(true);
  };

  const minPrice = (item: any) => {
    if (!item) {
      return 0;
    }
    const group = listProductFilterByGroup.filter(
      (e: any) => e.group === item.group
    );
    const mapClassification = group.flatMap(
      (e: any) => e.productClassification
    );
    const sortedPrice = mapClassification.sort(
      (a: any, b: any) => a.price - b.price
    );

    return sortedPrice[0].price;
  };

  return (
    <>
      <div className="flex flex-col gap-7">
        <span className="font-medium text-4xl w-full p-4 text-center block">
          Danh sách dòng xe
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-10">
          {listProductFilterByGroup?.map((item: any, idx: number) => (
            <div
              key={idx}
              className="w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
            >
              <div className="h-48 w-full relative">
                <Image
                  className="h-48 w-full object-contain"
                  src={item.productClassification[0].images[0]}
                  alt="Product Image"
                  fill
                  objectFit="cover"
                  quality={100}
                />
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                  {item.group.name}
                </h2>
                <div className="flex items-center">
                  <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                    {item.category.name}
                  </p>
                  <a
                    type="button"
                    id="myBtn"
                    className="ml-auto mb-2 text-base font-medium text-green-500 cursor-pointer"
                    onClick={() => btnQuickViewClick(item)}
                  >
                    Xem nhanh
                  </a>
                </div>
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
          ))}
        </div>

        <div className="w-full flex justify-center my-7">
          <Link
            href="/san-pham"
            className="font-medium text-lg bg-zinc-500 rounded px-4 py-2 text-white w-full max-w-[400px] text-center"
          >
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>

      <DialogComponent
        open={quickView}
        closeOnClickOutside
        onClose={() => setQuickView(false)}
        content={
          <>
            {quickViewData && productSelected && (
              <div className="flex flex-col">
                <span className="text-xl font-medium">Chi tiết sản phẩm</span>

                <div className="flex lg:flex-row flex-col w-full">
                  <div className="w-full lg:w-2/5 h-[400px] relative">
                    <Image
                      src={productSelected.images[0]}
                      alt=""
                      fill
                      objectFit="contain"
                    />
                  </div>
                  <div className="w-full lg:w-3/5 flex flex-col gap-3">
                    <span className="text-2xl font-medium">
                      {quickViewData.productName} -{" "}
                      {quickViewData.category.name}
                    </span>
                    <span className="font-medium">
                      <span className="text-3xl">
                        {formatNumber(productSelected.price)}
                      </span>{" "}
                      VNĐ
                    </span>
                    <span className="text-lg font-medium">Màu sắc</span>

                    <div className="flex flex-wrap gap-3">
                      {quickViewData.productClassification?.map(
                        (e: any, idx: number) => (
                          <div
                            key={idx}
                            className="text-lg px-4 py-1 rounded border cursor-pointer"
                            onClick={() => setProducSelected(e)}
                          >
                            {e.color}
                          </div>
                        )
                      )}
                    </div>
                    {!!prodSameGroup?.length && (
                      <div className="flex flex-col">
                        <span className="text-lg font-medium">
                          Sản phẩm cùng loại
                        </span>

                        <div className="flex flex-wrap justify-center items-center">
                          {prodSameGroup?.map((e: any, idx: number) => (
                            <div
                              key={idx}
                              className="w-full md:w-1/2 lg:w-1/3 cursor-pointer p-3"
                              onClick={() => btnQuickViewClick(e)}
                            >
                              <div className="w-full  h-[200px] relative">
                                <Image
                                  src={e.productClassification[0].images[0]}
                                  alt=""
                                  objectFit="contain"
                                  fill
                                />
                              </div>
                              <div className="text-base font-medium md:text-left text-center">
                                {e.productName}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </>
        }
      />
    </>
  );
};

export default ProductGroups;
