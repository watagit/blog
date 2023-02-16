import fs from "fs";
import satori from "satori";
import sharp from "sharp";

export const generateOgpImage = async (title: string): Promise<Buffer> => {
  const font = fs.readFileSync("./font/NotoSansJP-Regular.otf");

  const svg = await satori(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "linear-gradient(45deg, #FAACA8 0%, #DDD6F3 100%)",
        fontWeight: 600,
        padding: 48
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "white",
          padding: 40,
          borderRadius: 10
        }}
      >
        <div style={{ color: "#333", fontSize: 64, fontWeight: "bold", maxWidth: 1000 }}>
          就活記録
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              color: "#333333",
              fontSize: 48,
              display: "flex",
              alignItems: "center",
              fontWeight: 400
            }}
          >
            <img
              src="https://pbs.twimg.com/profile_images/1494314374588399617/zy6lqhgc_400x400.jpg"
              width={50}
              height={50}
              style={{ borderRadius: 9999, marginRight: 24, border: "1px solid #333333" }}
            />
            what_a_pon
          </div>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans JP",
          data: font,
          style: "normal"
        }
      ]
    }
  );

  return await sharp(Buffer.from(svg)).png().toBuffer();
};
