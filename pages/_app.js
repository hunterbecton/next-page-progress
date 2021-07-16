import 'tailwindcss/tailwind.css';
import Router from 'next/router';

import { Progress } from '../components';
import { useProgressStore } from '../store';

function MyApp({ Component, pageProps }) {
  const setIsAnimating = useProgressStore((state) => state.setIsAnimating);
  const isAnimating = useProgressStore((state) => state.isAnimating);
  Router.onRouteChangeStart = () => {
    setIsAnimating(true);
  };

  Router.onRouteChangeComplete = () => {
    setIsAnimating(false);
  };

  Router.onRouteChangeError = () => {
    setIsAnimating(false);
  };
  return (
    <>
      <Progress isAnimating={isAnimating} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
