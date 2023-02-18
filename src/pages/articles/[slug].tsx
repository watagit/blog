import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";

import { PageWithLayout } from "@/component/layout/PageWithLayout";
import { ArticleDetail } from "@/component/page/ArticleDetail";
import { getArticle, getArticles } from "@/lib/newt";
import type { NextPageWithLayout } from "@/type/layout";

type ArticleDetailPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ArticleDetailPage: NextPageWithLayout<ArticleDetailPageProps> = ({
  article,
}) => {
  return <ArticleDetail article={article} />;
};

export const getStaticPaths = async () => {
  const articles = await getArticles();

  const paths = articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!params) return;
  if (!params.slug) return;

  const slug = params.slug.toString();

  try {
    const article = await getArticle(slug);

    return {
      props: {
        article,
      },
    };
  } catch (error) {
    console.error(error);
  }
};

ArticleDetailPage.getLayout = PageWithLayout;

export default ArticleDetailPage;
