import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"

function Directors() {

  const [directors,setDirectors] = useState([])

  useEffect( () => {
    fetch("http://localhost:4000/directors")
    .then(data => data.json())
    .then(json => setDirectors(json))
}, [])
  
  const directorNames = directors.map(director => {

    const movies = director.movies.map(movie =>{
      return <li key={movie}>{movie}</li>
    })
    return (
    <article key={director.id}>
      <h2>{director.name}</h2>
      <ul>{movies}</ul>
    </article>
  )
  })

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorNames}
      </main>
    </>
  );
};

export default Directors;
