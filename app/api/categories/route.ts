import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://fakestoreapi.com/products/categories", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return NextResponse.json(data);
}
