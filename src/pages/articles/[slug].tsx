import type { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useMemo } from "react";

import { PageWithLayout } from "@/component/layout/PageWithLayout";
import { ArticleDetail } from "@/component/page/ArticleDetail";
import { getArticle, getArticles } from "@/lib/newt";
import type { NextPageWithLayout } from "@/type/layout";

type ArticleDetailPageProps = InferGetStaticPropsType<typeof getStaticProps>;

const ArticleDetailPage: NextPageWithLayout<ArticleDetailPageProps> = ({
  article,
}) => {
  const ogImagePath = useMemo(() => {
    return `https://blog-nextjs-six-eta.vercel.app/api/og?title=${article.title}`;
  }, [article.title]);

  return (
    <>
      <Head>
        <meta property="og:image" content={ogImagePath} />
      </Head>
      <ArticleDetail article={article} />
    </>
  );
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
