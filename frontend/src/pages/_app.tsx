import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider 
    session={session} 
    basePath="/" 
    refetchInterval={5 * 60} 
    refetchOnWindowFocus={true} >
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;