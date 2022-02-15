import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>MyTop - the best react application</title>
            <link rel='icon' href='/favicon.ico' />
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link
               href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap'
               rel='stylesheet'
            />
         </Head>
         <Component {...pageProps} />
      </>
   );
}

export default MyApp;
