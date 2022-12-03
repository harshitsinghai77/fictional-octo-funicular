import Head from "next/head";
import { getSiteMetaData } from "../utils/helpers";

const siteMetadata = getSiteMetaData();
const defaultDescription = siteMetadata.description;

export default function SEO({ title, coverImage, excerpt }) {
  return (
    <Head>
      <title>{title || siteMetadata.title}</title>
      <meta charSet="UTF-8"></meta>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <meta name="description" content={excerpt || defaultDescription} />
      <meta name="image" content={coverImage} />
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={excerpt} />
      <meta itemProp="image" content={coverImage} />
      <meta name="author" content="Harshit Singhai" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteMetadata.siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={excerpt} />
      <meta name="twitter:site" content="@harshit_778" />
      <meta name="twitter:creator" content="@harshit_778" />
      <meta name="twitter:image" content={coverImage} />
      <meta name="twitter:image:src" content={coverImage} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={excerpt} />
      <meta name="og:image" content={coverImage} />
      <meta name="og:url" content={siteMetadata.siteUrl} />
      <meta name="og:site_name" content={siteMetadata.title} />
      <meta name="og:locale" content="en_US" />
      <meta name="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={excerpt} />
      <meta property="og:image" content={coverImage} />
      <meta property="og:site_name" content={title} />

      <meta name="linkedin:creator" content={siteMetadata.social.linkedin} />
      <meta name="github:creator" content={siteMetadata.social.github} />
      <link rel="icon" type="image/png" href="/favicon/logo_icon.png" />
      <link rel="apple-touch-icon" href="/favicon/logo.ico" />
    </Head>
  );
}
