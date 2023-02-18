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
          <div>
            <h1>{title}</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
