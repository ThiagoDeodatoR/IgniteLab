import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oauc3n1net01z24ivc91r2/master',
    cache: new InMemoryCache(),
})