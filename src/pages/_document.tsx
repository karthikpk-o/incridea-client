import { Html, Head, Main, NextScript } from "next/document";
import { env } from "~/env";

export default function Document() {
  return (
    <Html lang="en-us">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#46aacf" />
        {
          env.NEXT_PUBLIC_NODE_ENV === "development" &&
          <script
            crossOrigin="anonymous"
            src="//unpkg.com/react-scan/dist/auto.global.js"
            async
          />
        }
      </Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
