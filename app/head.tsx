export default function Head() {
  return (
    <>
      <title>Mindfulness Manifesters </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />

      <script src="https://www.googletagmanager.com/gtag/js?id=G-YE94Z3VF7X" />
      <script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-YE94Z3VF7X');
        `}
      </script>
    </>
  );
}
