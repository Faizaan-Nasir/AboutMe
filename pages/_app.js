import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title id="title">Home Page</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="shortcut icon"
                    href="/home_page.png"
                    type="image/x-icon"
                    id="icon"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
