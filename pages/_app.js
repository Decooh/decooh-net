import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
// import { CssDefault } from "../components/CssDefault";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Router from "next/router";
import NProgress from "nprogress";
import CssDefault from '../components/CssDefault';

Router.events.on('routeChangeStart', (url) => {
 //console.log(`Loading: ${url}`);
NProgress.start();
})

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());


function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      {/* <CssDefault/> */}
      <CssDefault/>
        <Header/>
          <Component {...pageProps} />
        <Footer/>
    </React.Fragment>
    );
}

export default MyApp
