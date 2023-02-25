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
      heroCollection(where: {appearsOnPage: "${slug}"}) {
        items {
          title
          subtitle
          content {
            json
          }
          image {
            url
            width
            height
            title
            description
          }
          imageMobile {
            url
            width
            height
            title
            description
          }
        }
      }
      headerCollection {
        items {
          logo {
            url
            width
            height
            title
            description
          }
          nav
          socialCollection {
            items {
              url
              width
              height
              title
              description
            }
          }
        }
      }
    }
  `;
};

export const headerQuery = gql`
  {
    headerCollection {
      items {
        logo {
          url
          width
          height
          title
          description
        }
        nav
        socialCollection {
          items {
            url
            width
            height
            title
            description
          }
        }
      }
    }
  }
`;
