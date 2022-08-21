import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";

import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState(["bull", "charm"]);
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState(nextPage);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancel;
    axios
      .get(currentPage, {
        CancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPage(res.data.next);
        setPreviousPage(res.data.previous);
        setPokemon(res.data.results.map((p) => p.name));
      });
    return () => cancel();
  }, [currentPage]);

  function goNextPage() {
    setCurrentPage(nextPage);
  }

  function goPreviousPage() {
    setCurrentPage(previousPage);
  }

  if (loading) return "Loading....";

  return (
    <div className="App">
      <h2>Names Of Pokemon</h2>
      <Pagination
        goNextPage={nextPage ? goNextPage : null}
        goPreviousPage={previousPage ? goPreviousPage : null}
      />
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
