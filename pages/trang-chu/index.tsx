import React from "react";
import Carousel from "./carousel";
import ProductGroups from "./product-groups";
import BestSeller from "./best-seller";
import News from "./news";
import Feedback from "./feedback";
import { dbNews, dbProducts } from "../../common/firebase.config";
import { getDocs } from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

type Props = {
  products: any;
  news: any;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const products = await getDocs(dbProducts).then((data) => {
    return data.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
  });

  const news = await getDocs(dbNews).then((data) => {
    return data.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
  });

  return { props: { products, news } };
};

const HomePage = ({
  products,
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const mapGroup = new Map(
    products.filter(Boolean).map((item: any) => [item["group"]["id"], item])
  );

  const listProductFilterByGroup = Array.from(mapGroup.entries())
    .flat()
    .filter((e) => !(typeof e === "string" || e instanceof String));

  const bestSellerList = listProductFilterByGroup.filter(
    (e: any) => e.direction === "right"
  );

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <Carousel />
      <div className="w-full lg:w-[1220px] xl:w-[1220px] px-6 py-12">
        <ProductGroups
          listProductFilterByGroup={listProductFilterByGroup}
          allProducts={products}
        />
        <BestSeller bestSellerList={bestSellerList} />
        <News newsList={news} />
        <Feedback />
      </div>
    </div>
  );
};

export default HomePage;
