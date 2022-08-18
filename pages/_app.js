import "../styles/globals.css";

import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

export default MyApp;
