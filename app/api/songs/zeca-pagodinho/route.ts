// filepath: c:\\Users\\carlo\\GITHUB\\cifra-manager\\app\\api\\songs\\zeca-pagodinho\\route.ts
import { NextResponse } from "next/server";

// Hardcode the song slugs to avoid file system operations in production
const songSlugs = [
  "agua-da-minha-sede",
  "ainda-e-tempo-de-ser-feliz",
  "camarao-que-dorme-a-onda-leva",
  "coracao-em-desalinho",
  "deixa-a-vida-me-levar",
  "faixa-amarela",
  "lama-nas-ruas",
  "mais-feliz",
  "maneiras",
  "nao-sou-mais-disso",
  "o-dono-da-dor",
  "ogum",
  "pago-pra-ver",
  "quando-a-gira-girou",
  "quem-e-ela_",
  "seu-balance",
  "toda-hora",
  "vacilao",
  "vai-vadiar",
  "verdade",
];

export async function GET() {
  try {
    return NextResponse.json({ songs: songSlugs });
  } catch (error) {
    console.error("Failed to list songs:", error);
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { error: "Failed to list songs", details: errorMessage },
      { status: 500 }
    );
  }
}
