import React from "react";
import Head from "next/head";

import Hero from "./Hero";
import { getWindowSize } from "../hooks/GetWindowSize";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  title,
  keywords,
  description,
  children,
  hero,
  footer,
}) {
  const { width } = getWindowSize();
  return (
    <div className="2xl:container 2xl:mx-auto">
      <Head>
        <title>{title} </title>
        <meta name="keywords" content={keywords} />
        <meta name="keywords" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {hero && <Hero width={width} />}
      <main
        className="container mx-auto my-7 
      p-1"
      >
        {children}
      </main>
      {footer && <Footer />}
    </div>
  );
}

Layout.defaultProps = {
  hero: true,
  footer: true,
};
