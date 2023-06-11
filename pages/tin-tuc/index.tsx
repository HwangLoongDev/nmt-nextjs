import { dbNews } from "@/common/firebase.config";
import { getDocs } from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

type Props = {
  news: any;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const news = await getDocs(dbNews).then((data) => {
    return data.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
  });

  return { props: { news } };
};
const NewsPage = ({
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>NewsPage</div>;
};

export default NewsPage;
