import type { FC } from "react";

import type { Article } from "@/domain/article";
import { ArticleHeading } from "@/component/model/article/ArticleHeading";
import { ArticleBody } from "@/component/model/article/ArticleBody";

type ArticleDetailProps = {
  article: Article;
};

export const ArticleDetail: FC<ArticleDetailProps> = ({ article }) => {
  if (!article) return <p>お探しの記事が見つかりませんでした。</p>;
  return (
    <section>
      <ArticleHeading
        icon={article.icon}
        title={article.title}
        createdAt={article._sys.createdAt}
      />
      <ArticleBody body={article.content} />
    </section>
  );
};
