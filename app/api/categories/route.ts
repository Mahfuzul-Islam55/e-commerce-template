import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();

  return NextResponse.json(data);
}
