import Document, { Head, Main, NextScript, Html } from "next/document";

import { getSiteMetaData } from "../utils/helpers";

export default class MyDocument extends Document {
  render() {
    const siteMetadata = getSiteMetaData();
    return (
      <Html lang={siteMetadata.language}>
        <Head>
          <link
            href="./fonts/raleway-v17-latin-regular.woff2"
            rel="stylesheet"
          />
          <link href="./fonts/raleway-v17-latin-500.woff2" rel="stylesheet" />
          <link href="./fonts/raleway-v17-latin-600.woff2" rel="stylesheet" />
          <link href="./fonts/raleway-v17-latin-700.woff2" rel="stylesheet" />
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
