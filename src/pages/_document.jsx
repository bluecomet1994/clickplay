import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/black-favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SYE2TNN6ZQ"></Script>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
