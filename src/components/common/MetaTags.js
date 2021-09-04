import Head from "next/head";

export default function MetaTags({ title, description, canonicalUrl }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {/* <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Cache-Control" content="no-cache" /> */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://ogp.me/logo.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:alt" content="Early Bird logo" />
      <meta property="og:description" content={description} />
      {/* Open Graph End */}

      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
}
