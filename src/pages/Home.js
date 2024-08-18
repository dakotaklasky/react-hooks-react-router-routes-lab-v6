import NavBar from "../components/NavBar"
import MovieCard from "../components/MovieCard"

import { useEffect, useState } from "react";

function Home() {

const [movies, setMovies] = useState([])



useEffect( () => {
  fetch("http://localhost:4000/movies")
  .then(data => data.json())
  .then(json => setMovies(json))
}, [])





const movieList = movies.map(movie => {
  return <MovieCard movie={movie} key={movie.id}/>
})

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
