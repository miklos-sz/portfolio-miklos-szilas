import SiteHead from '@/components/SiteHead/SiteHead';
import Container from '../Container/Container';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SiteHead />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};
export default Layout;
