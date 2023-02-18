import type { FC } from "react";
import type { Article } from "@/domain/article";

type TopProps = {
  articles: Array<Article>;
};

export const Top: FC<TopProps> = ({ articles }) => {
  console.log({ articles });
  return <p>hello</p>;
};
