import '../styles/globals.css'
import Layout from "../components/Layout";
import "../styles/globals.css"

const MyApp = ({ Component, pageProps }) => {
  return (
      <Layout>
          <main>
              <Component {...pageProps} />
          </main>
      </Layout>
  )
}

export default MyApp;
