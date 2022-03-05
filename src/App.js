import { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Header";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6c723adb`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search); 
    }
  };
    
  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue])
  return (
    <div>
      <div className="=row">
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className="w-full">
        <div className="overflow-x-scroll whitespace-nowrap space-x-8">
          <Homepage key={movies.id} movies={movies} />
        </div>
      </div>
    </div>
  );
}

export default App;
