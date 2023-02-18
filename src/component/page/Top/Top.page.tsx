import type { FC } from "react";

import { Top } from "./Top";

import type { Article } from "@/domain/article";
import { Header } from "@/component/ui/Header";

type TopPageProps = {
  articles: Array<Article>;
};

export const TopPage: FC<TopPageProps> = ({ articles }) => {
  return (
    <>
      <Header />
      <Top articles={articles} />
    </>
  );
};
