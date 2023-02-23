import Header from 'components/Header/Header';
import SiteHead from 'components/SiteHead/SiteHead';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SiteHead />
      <Header />
      <main>{children}</main>
    </>
  );
};
export default Layout;
