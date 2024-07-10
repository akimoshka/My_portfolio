import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        body {
          background-image: url('${process.env.NEXT_PUBLIC_BASE_PATH}/stuff/background.jpg');
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
