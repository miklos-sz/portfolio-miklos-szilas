import { pageQueryBySlug, pagesQuery } from 'queries';
import { Page } from 'types';
import { client } from 'utils/gqlClient';
import { ParsedUrlQuery } from 'querystring';

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
  const data = await client.request(pagesQuery);
  const paths = data.pageCollection.items.map((page: any) => {
    return {
      params: {
        slug: page.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { slug } = context.params as IParams;
  const data = await client.request(pageQueryBySlug(slug));

  return {
    props: {
      page: data.pageCollection.items[0],
    },
    revalidate: 10,
  };
};

interface HomeProps {
  page: Page;
}

const Home = ({ page: { description, title } }: HomeProps) => {
  return (
    <div>
      {title && (
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
