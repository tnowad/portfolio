import { NextRequest, NextResponse } from "next/server";
import { gql } from "@apollo/client";
import { getClient } from "@/server/graphql";
interface Context {
  params: {
    id: string;
  };
}

export async function GET(request: Request, context: Context) {
  try {
    const discussionNumber = parseInt(context.params.id);

    const GET_DISCUSSION = gql`
      query Discussions($discussionNumber: Int!) {
        repository(owner: "tnowad", name: "portfolio") {
          discussion(number: $discussionNumber) {
            id
            number
            url
            title
            createdAt
            bodyText
            bodyHTML
            category {
              id
              description
              name
            }
            publishedAt
            updatedAt
            author {
              login
              avatarUrl
              url
            }
            repository {
              id
            }
            labels(first: 100) {
              nodes {
                name
              }
            }
          }
        }
      }
    `;

    const { data } = await getClient().query({
      query: GET_DISCUSSION,
      variables: { discussionNumber },
    });
    console.log("fetch");
    return new NextResponse(JSON.stringify(data.repository.discussion));
  } catch (error) {
    console.error(error);
    return new NextResponse(null, {
      status: 500,
    });
  }
}
