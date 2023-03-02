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
    <Container>
      <section className={`bg-${bgColorVariant}`}>{children}</section>
    </Container>
  );
};

export default ContentSection;
