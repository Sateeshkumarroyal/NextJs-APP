import { Fragment } from 'react';
import Head from 'next/head';
import { useEffect } from "react";
import './global.scss'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../pages/components/Header';
import Footer from '../pages/components/Footer';
import JobSeeker from '../pages/components/JobSeeker';
import Client from '../pages/components/Client';
import LatestJobs from '../pages/components/latestJobs';
import Sector from '../pages/components/Sector';
import AboutUS from '../pages/components/Aboutus';
import WeDo from '../pages/components/Wedo';
import Insights from '../pages/components/Insights';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Fragment>
      <Head>
        <title>SourceFlow</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <JobSeeker/>
      <Client/>
      <LatestJobs/>
      <Sector/>
      <AboutUS/>
      <WeDo/>
      <Insights/>
      <Component {...pageProps} />
      <Footer />
    </Fragment>
  );
}

export default MyApp;


