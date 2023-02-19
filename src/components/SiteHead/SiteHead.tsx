import React from 'react';
import Head from 'next/head';

const SiteHead = (): JSX.Element => {
  return (
    <Head>
      <title>Miklós Szilas</title>
      <meta
        name="description"
        content="Portfolio of Miklós Szilas, Frontend Developer"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
  );
};

export default SiteHead;
