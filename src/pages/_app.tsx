import '../styles/global.css'

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </div>
  )
}

export default MyApp
