import { NextResponse } from "next/server";
import { gql } from "@apollo/client";
import { getClient } from "@/server/graphql";

export async function GET(_request: Request) {
  try {
    const query = `repo:tnowad/portfolio sort:updated`;
    const GET_DISCUSSIONS = gql`
      query Discussions($query: String!) {
        discussions: search(query: $query, type: DISCUSSION, first: 100) {
          discussionCount
          nodes {
            ... on Discussion {
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
      }
    `;

    const { data } = await getClient().query({
      query: GET_DISCUSSIONS,
      variables: { query },
    });

    return new NextResponse(JSON.stringify(data));
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
