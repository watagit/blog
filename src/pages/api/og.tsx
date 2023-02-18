import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "experimental-edge",
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "linear-gradient(45deg, #FAACA8 0%, #DDD6F3 100%)",
            fontWeight: 600,
            padding: 48,
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
              borderRadius: 10,
            }}
          >
            <div
              style={{
                color: "#333",
                fontSize: 64,
                fontWeight: "bold",
                maxWidth: 1000,
              }}
            >
              {title}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div
                style={{
                  color: "#333333",
                  fontSize: 48,
                  display: "flex",
                  alignItems: "center",
                  fontWeight: 400,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://pbs.twimg.com/profile_images/1494314374588399617/zy6lqhgc_400x400.jpg"
                  width={50}
                  height={50}
                  style={{
                    borderRadius: 9999,
                    marginRight: 24,
                    border: "1px solid #333333",
                  }}
                  alt="hey"
                />
                what_a_pon
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
