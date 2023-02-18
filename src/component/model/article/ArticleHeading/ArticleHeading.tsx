import type { FC } from "react";
import dayjs from "dayjs";

import type { Icon } from "@/domain/article";

type ArticleHeadingProps = {
  icon: Icon;
  title: string;
  createdAt: Date;
};

export const ArticleHeading: FC<ArticleHeadingProps> = ({
  icon,
  title,
  createdAt,
}) => {
  const formatDate = dayjs(new Date(createdAt)).format("YYYY/MM/DD");

  return (
    <div className="flex flex-col gap-5 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-6xl">{icon.value}</h1>
        <h1 className="text-3xl font-bold text-black">{title}</h1>
      </div>
      <p className="text-gray-500">{formatDate} に公開</p>
    </div>
  );
};
