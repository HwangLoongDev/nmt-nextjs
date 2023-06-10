import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./trang-chu";
import { dbProducts, dbNews } from "@/common/firebase.config";
import { getDocs } from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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

export default function Home({
  products,
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
        <meta name="og:locale" content="vi_VN" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content="https://fordmydinhgiatot.com" />
        <meta
          name="og:title"
          content="Ford Mỹ Đình giá tốt - Cam kết giá tốt - Tư vấn nhiệt thành - Uy tín"
        />
        <meta
          name="og:description"
          content="Ngập tràn ưu đãi dành cho Khách hàng | Báo giá lăn bánh tốt nhất | Ưu đãi phụ kiện cao cấp | Cam kết không phát sinh chi phí | Liên hệ ngay"
        />
        <meta name="og:site_name" content="Ford Mỹ Đình giá tốt" />
      </Head>
      <HomePage products={products} news={news} />
    </>
  );
}
