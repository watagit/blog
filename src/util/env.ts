// 環境変数名を変えた場合に更新漏れが発生しないように、利用する環境変数のエイリアスをここで作成してから各ファイルで使用する

if (!process.env.NEXT_APP_NEWT_SPACE_UID)
  throw new Error("NEXT_APP_NEWT_SPACE_UID is not set");
if (!process.env.NEXT_APP_NEWT_CDN_API_TOKEN)
  throw new Error("NEXT_APP_NEWT_CDN_API_TOKEN is not set");
if (!process.env.NEXT_APP_NEWT_APP_UID)
  throw new Error("NEXT_APP_NEWT_APP_UID is not setted");

export const NEWT_SPACE_UID = process.env.NEXT_APP_NEWT_SPACE_UID;
export const NEWT_CDN_API_TOKEN = process.env.NEXT_APP_NEWT_CDN_API_TOKEN;
export const NEWT_APP_UID = process.env.NEXT_APP_NEWT_APP_UID;
