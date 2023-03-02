import ContentSection from 'components/ContentSection/ContentSection';
import Hero from 'components/Hero/Hero';
import {
  headerQuery,
  heroQueryByLocation,
  pageQueryBySlug,
  skillsQuery,
} from 'queries';
import { HeaderType, HeroType, PageType, SkillsType } from 'types';
import { client } from 'utils/gqlClient';

export const getStaticProps = async () => {
  const data = {
    page: await client.request(pageQueryBySlug('home')),
    hero: await client.request(heroQueryByLocation('home')),
    header: await client.request(headerQuery),
    skills: await client.request(skillsQuery),
  };

  return {
    props: {
      page: data.page.pageCollection.items[0],
      hero: data.hero.heroCollection.items[0],
      header: data.header.headerCollection.items[0],
      skills: data.skills.skillCollection.items[0],
    },
    revalidate: 10,
  };
};

interface HomeProps {
  page: PageType;
  hero: HeroType;
  header: HeaderType;
  headerData: (data: any) => void;
  skills: SkillsType;
}

const Home = ({ page: { title }, hero, skills }: HomeProps) => {
  console.log(skills);
  return (
    <>
      <Hero hero={hero} title={title} />
      <ContentSection bgColorVariant="primary">
        {JSON.stringify(skills)}
      </ContentSection>
    </>
  );
};

export default Home;
