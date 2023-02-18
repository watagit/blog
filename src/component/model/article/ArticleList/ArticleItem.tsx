import Link from "next/link";
import type { FC } from "react";

import { pagesPath } from "@/lib/$path";
import type { Article } from "@/domain/article";

type ArticleItemProps = {
  article: Article;
};

export const ArticleItem: FC<ArticleItemProps> = ({ article }) => {
  return (
    <Link
      className="flex flex-col items-center gap-2 py-10 rounded border border-gray-200 duration-300 hover:scale-[102%]"
      href={pagesPath.articles._id(article.slug).$url()}
    >
      <p className="text-5xl">{article.icon.value}</p>
      <h3 className="text-xs font-bold text-black">{article.title}</h3>
    </Link>
  );
};
