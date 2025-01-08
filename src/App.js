import { useEffect, useState } from "react";
const KEY = "79a1a757";

function App() {
  const [movies, setMovies] = useState([]); // State to store the movies
  const [query, setQuery] = useState("batman"); // State for the search query

  useEffect(() => {
    // Effect
    fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
      .then((res) => res.json())
      .then((data) => data.Response == "True" && setMovies(data.Search))
      .catch((err) => console.log(err));
      return () => {
        controller.abort();
      }
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <input type="text" placeholder="Search movies..." />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
