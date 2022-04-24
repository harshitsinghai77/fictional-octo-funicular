import Head from "next/head";
import { getSiteMetaData } from "../utils/helpers";

const siteMetadata = getSiteMetaData();
const defaultDescription = siteMetadata.description;

export default function SEO({ title, contentDescription, contentImage }) {
  return (
    <Head>
      <title>{title || siteMetadata.title}</title>
      <meta
        name="description"
        content={contentDescription || defaultDescription}
      />
      <meta property="og:type" content="article" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={contentDescription || defaultDescription}
      />
      <meta
        property="og:url"
        content="https://fictionally-irrelevant.vercel.app/"
      ></meta>
      <meta property="og:image" content={contentImage} />

      <meta name="twitter:card" content={title} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={contentDescription || defaultDescription}
      />
      <meta property="twitter:image" content={contentImage} />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />

      <meta name="linkedin:creator" content={siteMetadata.social.linkedin} />
      <meta name="github:creator" content={siteMetadata.social.github} />
      <link rel="icon" type="image/png" href="/static/favicon.ico" />
      <link rel="apple-touch-icon" href="/static/favicon.ico" />
    </Head>
  );
}
