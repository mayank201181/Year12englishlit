// Browser-tab icon: rose/crimson literary square with open-book & quill nib glyph.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #881337 100%)`,
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 26 C38 20, 22 20, 14 26 L14 78 C24 72, 38 72, 50 78 C62 72, 76 72, 86 78 L86 26 C78 20, 62 20, 50 26 Z" fill="none" stroke="#ffffff" strokeWidth={7} strokeLinejoin="round" />
          <line x1="50" y1="26" x2="50" y2="78" stroke="#ffffff" strokeWidth={6} />
          <path d="M68 14 L54 44 L64 46 L78 18 Z" fill="#fda4af" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
