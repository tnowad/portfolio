import { HttpLink } from "@apollo/client";
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      fetchOptions: { cache: "no-store" },
      headers: {
        authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }),
  });
});
