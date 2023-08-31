import { NextResponse } from "next/server";
import { graphql } from "@octokit/graphql";
export async function GET() {
  try {
    const { repository } = (await graphql(
      `
        {
          repository(name: "portfolio", owner: "tnowad") {
            discussions(first: 100) {
              nodes {
                id
                title
                url
                number
                bodyText
                createdAt
                lastEditedAt
                author {
                  login
                  url
                  avatarUrl
                }
                labels(first: 100) {
                  nodes {
                    name
                  }
                }
              }
            }
          }
        }
      `,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    )) as any;
    return new NextResponse(JSON.stringify(repository.discussions.nodes));
  } catch (error) {
    console.log(error);
    return new NextResponse(null, {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  return new NextResponse(JSON.stringify({}));
}
