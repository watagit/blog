import { createClient } from "newt-client-js";

import type { Article } from "@/domain/article";
import { NEWT_APP_UID, NEWT_CDN_API_TOKEN, NEWT_SPACE_UID } from "@/util/env";

export const client = createClient({
  spaceUid: NEWT_SPACE_UID,
  token: NEWT_CDN_API_TOKEN,
  apiType: "cdn",
});

export const getArticles = async (): Promise<Array<Article>> => {
  const { items: articles } = await client.getContents<Article>({
    appUid: NEWT_APP_UID,
    modelUid: "article",
    query: {
      select: ["_id", "title", "icon", "publishedAt", "content", "slug"],
    },
  });

  return articles;
};

export const getArticle = async (slug: string): Promise<Article> => {
  const article = await client.getFirstContent<Article>({
    appUid: NEWT_APP_UID,
    modelUid: "article",
    query: {
      slug,
      select: [
        "_id",
        "_sys",
        "title",
        "icon",
        "publishedAt",
        "content",
        "slug",
      ],
    },
  });

  if (article === null) throw new Error("該当する記事が見つかりませんでした。");
  return article;
};
