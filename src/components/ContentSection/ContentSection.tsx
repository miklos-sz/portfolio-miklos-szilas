import Container from 'components/Container/Container';
import { BrandColors } from 'types';

interface ContentProps {
  bgColorVariant?: BrandColors;
  children: React.ReactNode;
}

const ContentSection = ({
  bgColorVariant,
  children,
}: ContentProps): JSX.Element => {
  return (
    <section className={`bg-${bgColorVariant}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default ContentSection;
