export type Icon = {
  type: "emoji";
  value: string;
};

export type Article = {
  _id: string;
  _sys: {
    createdAt: Date;
  };
  title: string;
  icon: Icon;
  publishedAt: Date;
  content: string;
  slug: string;
};
