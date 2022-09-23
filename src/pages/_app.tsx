import '../styles/global.css';

import { ContextProvider } from '../components/AppContext';
import { Layout } from '@/components/Layout';

interface AppProps {
	Component: React.FunctionComponent<any>;
	pageProps: any;
	router: any;
}

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <ContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ContextProvider>
);

export default MyApp;
