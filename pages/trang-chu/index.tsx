import React from "react";
import Carousel from "./carousel";
import ProductGroups from "./product-groups";
import BestSeller from "./best-seller";
import News from "./news";
import Feedback from "./feedback";
import { dbNews, dbProducts } from "../../common/firebase.config";
import { getDocs } from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

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

  const bannersFiltered = news.filter((e: any) => e.banner);

  const newsFiltered = news.filter((e: any) => !e.banner);

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
        <meta property="og:locale" content="vi_VN" key="desc" />
        <meta property="og:type" content="website" key="desc" />
        <meta
          property="og:url"
          content="https://fordmydinhgiatot.com"
          key="desc"
        />
        <meta
          property="og:title"
          content="Ford Mỹ Đình giá tốt - Cam kết giá tốt - Tư vấn nhiệt thành - Uy tín"
          key="desc"
        />
        <meta
          property="og:description"
          content="Ngập tràn ưu đãi dành cho Khách hàng | Báo giá lăn bánh tốt nhất | Ưu đãi phụ kiện cao cấp | Cam kết không phát sinh chi phí | Liên hệ ngay"
          key="desc"
        />
        <meta
          property="og:site_name"
          content="Ford Mỹ Đình giá tốt"
          key="desc"
        />
      </Head>
      <div className="flex flex-col w-full justify-center items-center">
        <Carousel banners={bannersFiltered} />
        <div className="w-full lg:w-[1220px] xl:w-[1220px] px-6 py-12">
          <div id="nhom-san-pham">
            <ProductGroups
              listProductFilterByGroup={listProductFilterByGroup}
              allProducts={products}
            />
          </div>
          <div id="san-pham-ban-chay">
            <BestSeller bestSellerList={bestSellerList} />
          </div>
          <div id="tin-tuc">
            <News newsList={newsFiltered} />
          </div>
          <Feedback />
        </div>
      </div>
    </>
  );
};

export default HomePage;
