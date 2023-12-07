import Script from "next/script";
export default function Head() {
  return (
    <>
      <title>Mindfulness Manifester</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-YE94Z3VF7X" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-YE94Z3VF7X');
        `}
      </Script>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-1G8NESR5QL" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-1G8NESR5QL');
        `}
      </Script>


      
    </>
  );
}
