export type Icon = {
  type: "emoji";
  value: string;
};

export type Article = {
  _id: string;
  title: string;
  icon: Icon;
  publishedAt: Date;
  content: string;
  slug: string;
};
