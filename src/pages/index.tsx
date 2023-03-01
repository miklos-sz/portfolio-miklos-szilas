import Container from 'components/Container/Container';
import Hero from 'components/Hero/Hero';
import { pageQueryBySlug } from 'queries';
import { HeaderType, HeroType, PageType as PageType } from 'types';
import { client } from 'utils/gqlClient';

export const getStaticProps = async () => {
  const data = await client.request(pageQueryBySlug('home'));

  return {
    props: {
      page: data.pageCollection.items[0],
      hero: data.heroCollection.items[0],
      header: data.headerCollection.items[0],
    },
    revalidate: 10,
  };
};

interface HomeProps {
  page: PageType;
  hero: HeroType;
  header: HeaderType;
  headerData: (data: any) => void;
}

const Home = ({ page: { title }, hero, header, headerData }: HomeProps) => {
  return (
    <>
      <Hero hero={hero} title={title} />
    </>
  );
};

export default Home;
