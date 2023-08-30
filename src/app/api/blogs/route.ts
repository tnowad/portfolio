import { Octokit } from "@octokit/rest";
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
          authorization: `token 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`,
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
