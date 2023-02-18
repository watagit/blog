import type { FC } from "react";

type ArticleBodyProps = {
  body: string;
};

export const ArticleBody: FC<ArticleBodyProps> = ({ body }) => {
  return (
    <div
      className="mb-10 sm:mb-32"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
};
