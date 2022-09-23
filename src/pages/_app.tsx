import '../styles/global.css';

import { ContextProvider } from '../components/AppContext';

interface AppProps {
	Component: React.FunctionComponent<any>;
	pageProps: any;
	router: any;
}

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>
);

export default MyApp;
