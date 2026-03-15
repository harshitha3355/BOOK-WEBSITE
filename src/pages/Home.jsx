import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Subtitle from "../components/Subtitle";
import TrendingBlogs from "../components/TrendingBlogs";
import blogs from "../data/blogs";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />

      <div className="home">
        <section className="trending-section">
          <Subtitle heading={"Trending Blogs"} />
          <TrendingBlogs blogs={blogs} />
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;