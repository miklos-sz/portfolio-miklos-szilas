import Header from 'components/Header/Header';
import Layout from 'components/Layout/Layout';
import type { AppProps } from 'next/app';
import 'styles/styles.scss';

const App = ({ Component, pageProps }: AppProps) => {
  const { header } = pageProps;

  return (
    <Layout>
      <Header data={header} siteTitle={'Portfolio'} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
