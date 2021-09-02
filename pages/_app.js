import Layout from "../Components/Layout";
import "../styles/globals.css";

export const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
