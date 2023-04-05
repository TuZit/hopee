import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <title>Iu Phương Thảo :3</title>
        <meta name="description" content="Cái này viết ra để nói iu Thảo zl" />
        <meta name="og:title" content="Cái này viết ra để nói iu Thảo zl" />
        {/* <meta
          name="description"
          content="quat canh, buoi canh, cay giong, cay con"
        />
        <meta
          name="og:title"
          content="quat canh, buoi canh, cay giong, cay con"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
