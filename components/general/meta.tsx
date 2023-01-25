import Head from "next/head";
import Script from "next/script";

export default function Meta() {
  return (
    <>
      <Head>
        <title>Six Word Password</title>
        <meta
          name="description"
          content="An easy way to make secure memorable passwords."
        />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <Script
        async
        defer
        data-website-id="3903ed67-4625-4a88-8cf2-36e7b2e4cb80"
        src="https://umami.niknia.dev/umami.js"
      />
    </>
  );
}
