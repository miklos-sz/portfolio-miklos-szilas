import { pageQueryBySlug } from '@/queries/pages';
import { Page } from '@/types/pages';
import { client } from '@/utils/gqlClient';

export const getStaticProps = async () => {
  const data = await client.request(pageQueryBySlug('home'));

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

const Home = ({ page: { title } }: HomeProps) => {
  return (
    <>
      <div>
        {title && (
          <div
            style={{
              display: 'grid',
              gap: '1rem',
            }}
          >
            <p>Styling test</p>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              atque excepturi commodi iste, possimus nostrum deleniti sit
              officiis molestias debitis ut nemo facere non iure vitae ratione
              sunt natus veniam?
            </p>
            <p className="lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              atque excepturi commodi iste, possimus nostrum deleniti sit
              officiis molestias debitis ut nemo facere non iure vitae ratione
              sunt natus veniam?
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
