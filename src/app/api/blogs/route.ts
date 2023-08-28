import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogs = {};

    return new NextResponse(JSON.stringify(blogs));
  } catch (error) {
    return new NextResponse(null, {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  return new NextResponse(JSON.stringify({}));
}
