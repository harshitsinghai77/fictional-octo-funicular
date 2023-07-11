import Head from "next/head";
import { getSiteMetaData } from "../utils/helpers";

const siteMetadata = getSiteMetaData();

export default function Meta({ defaultSEOImage }) {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/logo_icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/logo_icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/logo_icon.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/logo_icon.png" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Fictionally Irrelevant by Harshit Singhai`}
      />

      {defaultSEOImage && (
        <>
          <meta
            property="og:image"
            content="/images/fictionallyIrrelevant.png"
          />
          <meta name="twitter:card" content="Fictionally Irrelevant." />
          <meta name="twitter:title" content="Fictionally Irrelevant." />
          <meta name="twitter:description" content="Fictionally Irrelevant." />
          <meta
            property="twitter:image"
            content="/images/fictionallyIrrelevant.png"
          />
          <meta name="twitter:creator" content={siteMetadata.social.twitter} />
        </>
      )}

      <meta name="og:title" content="Fictionally Irrelevant." />
      {/* <script src="https://player.vimeo.com/api/player.js"></script> */}
    </Head>
  );
}
