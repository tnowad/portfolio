import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    id: string;
  };
}
export async function GET(request: NextRequest, context: Context) {
  console.log(request);
  return new NextResponse(JSON.stringify({ context }));
}
