import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./trang-chu";
import { dbProducts, dbNews } from "@/common/firebase.config";
import { getDocs } from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

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
      <HomePage products={products} news={news} />
    </>
  );
}
