import React, { useState, useEffect } from "react";
import Loading from "../Components/Loading/Loading";
import Head from "next/head";
// import 'antd/dist/reset.css'
import "../styles/globals.scss";
import "keen-slider/keen-slider.min.css";
import Script from "next/script";
import TawkTo from "tawkto-react";
let ID = "G-BF34ZQFEZ0";

function MyApp({ Component, pageProps, router }) {
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    let tawk = new TawkTo("63e94db6474251287912edeb", "1gp3lf543");
    tawk.onStatusChange((status) => {
      // console.log(status);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Modulers Ltd</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${ID}`}
      />

      <Script strategy="lazyOnload">
        {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${ID}', {
                  page_path: window.location.pathname,
                  });
              `}
      </Script>
      {isLoaded ? <Component {...pageProps} /> : <Loading />}
    </>
  );
}

export default MyApp;
