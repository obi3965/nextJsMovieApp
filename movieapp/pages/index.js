import React, { useState, useEffect } from "react";

import Image from "next/image";
import Footer from "../components/footer";
import MovieList from "../components/movieList";
import Navbar from "../components/navbar";
import SideMenu from "../components/sideMenu";
import Slider from "../components/slider";
import styles from "../styles/Home.module.css";
import { getMovies, getCategories } from "../action";


const Home = (props) => {
 
  
  const { images, categories } = props
  

  return (
    <>
   
      

     <Navbar/>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu categories={categories} />
          </div>

          <div className="col-lg-9">
            <Slider images={images} />

            <div className="row">
              <MovieList movies={props.movies || [] } />
            </div>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <Footer />
      </footer>
      
    </>
  );
};


Home.getInitialProps = async () => {
  const movies = await getMovies()
  const categories = await getCategories()
  const images = movies.map(movie => ({
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name }))

  return {
    movies,
    images,
    categories
    
  }
}

export default Home;
