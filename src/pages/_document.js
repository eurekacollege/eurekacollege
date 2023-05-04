import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta property="og:image" content="https://www.yourwebsite.com/images/new-logo.png" />
      {/* <link rel="icon" href="/images/favlogo.png" type="image/x-icon" /> */}
      <link rel="shortcut icon" href="/images/favlogo.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
