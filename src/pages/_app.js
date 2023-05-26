import "@/styles/globals.css";
import Script from "next/script";
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  return (
      <>
        {/* <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />

        <Script id="google-analytics" strategy="afterInteractive"></Script>
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
          `
        } */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}');
          `
        }} />
        <Component {...pageProps} />
      </>
    )
    
}

export async function getServerSideProps(context) {
  const isUnderConstruction = true;

  if (isUnderConstruction) {
    return {
      redirect: {
        destination: "/underconstruction",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // You can pass additional props here if needed
  };
}