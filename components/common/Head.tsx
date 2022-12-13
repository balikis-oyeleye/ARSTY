import React from "react";
import Head from "next/head";

const SEO = ({ headTitle }: titleProps) => {
  const title =
    "A photo gallery that serves creators & collectors of art and photography generally.";
  return (
    <Head>
      <title>{headTitle}</title>
      <meta name="description" content="Generated by create next app" />
      <meta property="og:title" content={`ARSTY | ${title}`} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={title} />
      <meta
        property="og:image"
        content="https://arsty-challenge.vercel.app/image.png"
      />
      <meta property="og:url" content="https://arsty-challenge.vercel.app/" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
