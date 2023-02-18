import { GraphQLClient } from 'graphql-request';

const endpoint = `${process.env.CONTENTFUL_GQL_BASE_URL}/${process.env.CONTENTFUL_SPACE_ID}`;

const graphQLClientOptions = {
  headers: {
    authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
};

export const client = new GraphQLClient(endpoint, graphQLClientOptions);
