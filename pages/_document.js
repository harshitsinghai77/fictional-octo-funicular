import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "../utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();
    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.27.0/themes/prism.min.css"
            integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />

          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            href="/fonts/raleway-v17-latin-regular.woff2"
            rel="stylesheet"
          />
          <link href="/fonts/raleway-v17-latin-500.woff2" rel="stylesheet" />
          <link href="/fonts/raleway-v17-latin-600.woff2" rel="stylesheet" />
          <link href="/fonts/raleway-v17-latin-700.woff2" rel="stylesheet" />
          <base target="_blank" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
