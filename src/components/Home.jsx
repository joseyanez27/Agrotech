import React from "react";
import Navbar from "./gui/navbar/Navbar";
import Footer from "./gui/footer/Footer";
import Contact from "./gui/Contact";
import Service from "./gui/Service";
import Blog from "./gui/Blog";
import Main from "./gui/Main";
import Carousel from "./gui/Carousel";
import About from "./gui/About";
import News from "./gui/News";

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Contact />
      <Service />
      <Blog />
      <News />
      <Carousel />
      <About />
      <Footer />
    </>
  );
}

export default Home;
