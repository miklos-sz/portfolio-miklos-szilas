import Layout from 'components/Layout/Layout';
import type { AppProps } from 'next/app';
import 'styles/styles.scss';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
