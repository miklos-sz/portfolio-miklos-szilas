import Hero from 'components/Hero/Hero';
import { pageQueryBySlug } from 'queries';
import { HeroType, Page as PageType } from 'types';
import { client } from 'utils/gqlClient';

export const getStaticProps = async () => {
  const data = await client.request(pageQueryBySlug('home'));

  return {
    props: {
      page: data.pageCollection.items[0],
      hero: data.heroCollection.items[0],
    },
    revalidate: 10,
  };
};

interface HomeProps {
  page: PageType;
  hero: HeroType;
}

const Home = ({ page: { title }, hero }: HomeProps) => {
  return (
    <>
      <Hero hero={hero} title={title} />
    </>
  );
};

export default Home;
