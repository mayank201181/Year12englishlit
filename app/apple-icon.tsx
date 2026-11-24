// iOS home-screen icon: literary book & quill + IB English A badge.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #881337 100%)`,
        }}
      >
        <svg width={96} height={96} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <path d="M50 28 C38 22, 22 22, 14 28 L14 78 C24 72, 38 72, 50 78 C62 72, 76 72, 86 78 L86 28 C78 22, 62 22, 50 28 Z" fill="none" stroke="#ffffff" strokeWidth={6} strokeLinejoin="round" />
          <line x1="50" y1="28" x2="50" y2="78" stroke="#ffffff" strokeWidth={5} />
          <path d="M68 14 L54 46 L64 48 L78 18 Z" fill="#fda4af" />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: SUBJECT.themeColorLight,
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: 0.6,
          }}
        >
          {SUBJECT.shortName}
        </div>
      </div>
    ),
    { ...size },
  );
}
