import { dbProducts } from "@/common/firebase.config";
import { getDocs } from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import { formatNumber } from "@/common/function";

type Props = {
  products: any;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const products = await getDocs(dbProducts).then((data) => {
    return data.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
  });

  return { props: { products } };
};

const ProductsPage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const allProducts = products.flatMap((e: any) => [
    ...e.productClassification.map((x: any) => ({
      ...x,
      productName: e.productName,
    })),
  ]);

  const [filteredProducts, setFilteredProducts] = useState<any>(allProducts);

  const searchProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value) {
      const filtered = allProducts.filter((e: any) =>
        e.productName.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  };

  const sortProduct = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "0") {
      setFilteredProducts(filteredProducts);
    }
    if (event.target.value === "1") {
      const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
      setFilteredProducts(sorted);
    }
    if (event.target.value === "2") {
      const sorted = [...filteredProducts].sort((a, b) => b.price - a.price);
      setFilteredProducts(sorted);
    }
  };

  return (
    <>
      <Head>
        <title>
          Ford Mỹ Đình giá tốt - Cam kết giá tốt - Tư vấn nhiệt thành - Uy tín
        </title>
        <meta
          name="description"
          content="Ngập tràn ưu đãi dành cho Khách hàng | Báo giá lăn bánh tốt nhất | Ưu đãi phụ kiện cao cấp | Cam kết không phát sinh chi phí | Liên hệ ngay"
          key="desc"
        />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fordmydinhgiatot.com" />
        <meta
          property="og:title"
          content="Ford Mỹ Đình giá tốt - Cam kết giá tốt - Tư vấn nhiệt thành - Uy tín"
        />
        <meta
          property="og:description"
          content="Ngập tràn ưu đãi dành cho Khách hàng | Báo giá lăn bánh tốt nhất | Ưu đãi phụ kiện cao cấp | Cam kết không phát sinh chi phí | Liên hệ ngay"
        />
        <meta property="og:site_name" content="Ford Mỹ Đình giá tốt" />
      </Head>
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-[1220px] px-4 py-8 flex flex-col gap-7 justify-center items-center">
          <span className="font-medium text-4xl w-full p-4 text-center block">
            Danh sách sản phẩm
          </span>

          <div className="w-full lg:w-[1010px] flex flex-wrap justify-between">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="px-3 h-8 border border-stone-400 rounded"
              onChange={(e) => searchProduct(e)}
            />
            <select
              name=""
              id=""
              className="px-3 h-8 border border-stone-400 rounded"
              onChange={(e) => sortProduct(e)}
            >
              <option value="0">--- Sắp xếp ---</option>
              <option value="1">Giá tăng dần</option>
              <option value="2">Giá giảm dần</option>
            </select>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-10">
            {filteredProducts?.map((item: any, idx: number) => (
              <div
                key={idx}
                className="w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="h-48 w-full relative">
                  <Image
                    className="h-48 w-full object-contain"
                    src={item.images[0]}
                    alt="Product Image"
                    fill
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <div className="p-4">
                  <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                    {item.productName}
                  </h2>
                  <div className="flex items-center">
                    <a
                      type="button"
                      id="myBtn"
                      className="ml-auto mb-2 text-base font-medium text-green-500 cursor-pointer"
                      // onClick={() => btnQuickViewClick(item)}
                    >
                      Chi tiết
                    </a>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {formatNumber(item.price)}
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
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
