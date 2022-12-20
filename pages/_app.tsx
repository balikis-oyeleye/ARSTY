import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/layout/Header";
import { useState } from "react";
import Mobile from "../components/layout/Mobile";
import Footer from "../components/layout/Footer";
import { store } from "../app/store";
import { Provider } from "react-redux";
import "rc-slider/assets/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(false);
  return (
    <Provider store={store}>
      <Mobile setToggle={setToggle} toggle={toggle} />
      <Header setToggle={setToggle} />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
