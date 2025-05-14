import { CartProvider } from '@/context/CartContext';
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";

import '../styles/globals.css';

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps } 
}: AppProps) {
  return (
    <SessionProvider 
      session={session}
      refetchInterval={5 * 60} 
      refetchOnWindowFocus={true}
    >
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
