import { dbNews } from "@/common/firebase.config";
import { getDocs } from "firebase/firestore";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
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

const NewsDetailPage = ({
  news,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();

  const newsDetail = news.find((e: any) => e.slug === router.query.slug);

  return (
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8 flex flex-col justify-center items-center">
      <div className="text-900 font-medium text-4xl mb-4 text-center">
        {newsDetail?.title || ""}
      </div>
      <div className="flex flex-wrap lg:w-[1220px] lg:max-w[1220px] px-4 py-3">
        <div className="ql-container ql-snow w-full" style={{ borderWidth: 0 }}>
          <div
            style={{ fontSize: "1rem" }}
            className="ql-editor"
            dangerouslySetInnerHTML={{ __html: newsDetail?.editorContent }}
            //   innerHTML="
            //     sanitizer.bypassSecurityTrustHtml(newsDetail.editorContent || '')
            //   "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
