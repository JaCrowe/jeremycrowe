import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          font-family: "Roboto", Arial, Helvetica, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
