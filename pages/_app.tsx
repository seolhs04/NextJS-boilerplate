// import "../styles/globals.css";
import type { AppProps } from "next/app";

export const sum = (a: number, b: number): number => a + b;
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
