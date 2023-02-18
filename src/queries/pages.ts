import { gql } from 'graphql-request';

export const pagesQuery = gql`
  {
    pageCollection {
      items {
        title
        slug
        description
        sys {
          id
        }
      }
    }
  }
`;

export const pageQueryBySlug = (slug: string) => {
  return gql`
    {
      pageCollection(where: { slug: "${slug}" }) {
        items {
          title
          slug
          description
          sys {
            id
          }
        }
      }
    }
  `;
};
