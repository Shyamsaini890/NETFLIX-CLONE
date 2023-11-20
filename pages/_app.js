import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import "@/app/globals.css";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }) => {
  const path = useRouter().asPath;
  console.log(path);
  return (
    <>
      <Navbar className={path == "/signin" ? "hidden" : "block"} />
      <Component {...pageProps} />
      <Footer className={path == "/signin" ? "hidden" : "block"} />
    </>
  );
};

export default App;
