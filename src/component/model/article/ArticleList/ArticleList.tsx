import type { FC } from "react";

import { ArticleItem } from "./ArticleItem";
import type { Article } from "@/domain/article";

type ArticleListProps = {
  articles: Array<Article>;
};

export const ArticleList: FC<ArticleListProps> = ({ articles }) => {
  return (
    <ul className="flex flex-col gap-4 sm:grid sm:grid-cols-3">
      {articles.map((article) => (
        <li key={article._id}>
          <ArticleItem article={article} />
        </li>
      ))}
    </ul>
  );
};
