import '../styles/global.css';

import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion';
import { ContextProvider } from '../components/AppContext';
import { Layout } from '@/components/Layout';

const fadeBack = {
	name: 'Fade Back',
	variants: {
		initial: {
			opacity: 0.2,
			x: '100%',
		},
		animate: {
			opacity: 1,
			x: '0%',
		},
		exit: {
			opacity: 0.2,
			x: '-100%',
		},
	},
	transition: {
		duration: 0.3,
	},
};

interface AppProps {
	Component: React.FunctionComponent<any>;
	pageProps: any;
	router: any;
}

const MyApp = ({ Component, pageProps, router }: AppProps) => (
  <ContextProvider>
    <Layout>
				<LazyMotion features={domAnimation}>
					<AnimatePresence exitBeforeEnter={false}>
						<m.div
							key={router.route.concat(fadeBack.name)}
							initial="initial"
							animate="animate"
							exit="exit"
							variants={fadeBack.variants}
							transition={fadeBack.transition}
						>
              <Component {...pageProps} />
            </m.div>
          </AnimatePresence>
        </LazyMotion>
    </Layout>
  </ContextProvider>
);

export default MyApp;
