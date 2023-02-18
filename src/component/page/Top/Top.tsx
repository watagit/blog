import type { FC } from "react";

import type { Article } from "@/domain/article";
import { ArticleList } from "@/component/model/article/ArticleList";

type TopProps = {
  articles: Array<Article>;
};

export const Top: FC<TopProps> = ({ articles }) => {
  return <ArticleList articles={articles} />;
};
