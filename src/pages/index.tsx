import { InferGetStaticPropsType } from "next";
import NextHeadSeo from "next-head-seo";

import { PageWithLayout } from "@/component/layout/PageWithLayout";
import { Top } from "@/component/page/Top";
import { getArticles } from "@/lib/newt";
import type { NextPageWithLayout } from "@/type/layout";

type TopPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const TopPage: NextPageWithLayout<TopPageProps> = ({ articles }) => {
  return (
    <>
      <NextHeadSeo
        title="Wataru Ono's blog"
        description="Wataru Ono's personal blog"
        og={{
          title: "Wataru Ono's blog",
          image: "https://raw.githubusercontent.com/watagit/blog/image/og.png",
        }}
      />
      <Top articles={articles} />
    </>
  );
};

export const getStaticProps = async () => {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
  };
};

TopPage.getLayout = PageWithLayout;

export default TopPage;
