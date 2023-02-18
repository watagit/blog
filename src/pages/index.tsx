import { InferGetStaticPropsType } from "next";

import { PageWithLayout } from "@/component/layout/PageWithLayout";
import { Top } from "@/component/page/Top";
import { getArticles } from "@/lib/newt";
import type { NextPageWithLayout } from "@/type/layout";

type TopPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const TopPage: NextPageWithLayout<TopPageProps> = ({ articles }) => {
  return <Top articles={articles} />;
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
