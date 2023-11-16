import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        ></link>
        <meta charSet='utf-8' />
        <meta
          name='description'
          content='Nhà vườn Cây cảnh, cây giống Giang Nhàn. Cung cấp quất cảnh, bưởi cảnh, chậu cảnh Tết; cây giống: cam giống, chanh giống, bưởi giống...'
        />
        <meta
          name='og:title'
          content='Nhà vườn Cây cảnh, cây giống Giang Nhàn. Cung cấp quất cảnh, bưởi cảnh, chậu cảnh Tết; cây giống: cam giống, chanh giống, bưởi giống...'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
