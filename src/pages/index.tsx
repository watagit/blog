import { InferGetStaticPropsType, NextPage } from "next";

import { TopPage as PageContent } from "@/component/page/Top";
import { getArticles } from "@/lib/newt";

type TopPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const TopPage: NextPage<TopPageProps> = ({ articles }) => {
  return <PageContent articles={articles} />;
};

export const getStaticProps = async () => {
  const articles = await getArticles();

  return {
    props: {
      articles,
    },
  };
};

export default TopPage;
