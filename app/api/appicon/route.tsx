// PWA app icon as a PNG, drawn on demand.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const runtime = "nodejs";

const MIN = 48;
const MAX = 1024;
const FALLBACK = 512;
const BRAND = SUBJECT.themeColorLight;
const BRAND_2 = "#881337";

function sizeFrom(raw: string | null): number {
  const n = Number(raw);
  if (!raw || !Number.isFinite(n)) return FALLBACK;
  return Math.round(Math.min(MAX, Math.max(MIN, n)));
}

function SubjectGlyph({ px }: { px: number }) {
  return (
    <svg width={px} height={px} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 28 C38 22, 22 22, 14 28 L14 78 C24 72, 38 72, 50 78 C62 72, 76 72, 86 78 L86 28 C78 22, 62 22, 50 28 Z" fill="none" stroke="#ffffff" strokeWidth={6} strokeLinejoin="round" />
      <line x1="50" y1="28" x2="50" y2="78" stroke="#ffffff" strokeWidth={5} />
      <path d="M68 14 L54 46 L64 48 L78 18 Z" fill="#fda4af" />
    </svg>
  );
}

export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const size = sizeFrom(searchParams.get("size"));
  const maskable = searchParams.get("maskable") === "1";
  const glyph = Math.round(size * (maskable ? 0.6 : 0.66));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_2} 100%)`,
          borderRadius: maskable ? 0 : Math.round(size * 0.22),
        }}
      >
        <SubjectGlyph px={glyph} />
      </div>
    ),
    {
      width: size,
      height: size,
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    },
  );
}
