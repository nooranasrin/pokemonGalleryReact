import React from 'react';
import * as data from './pokemon.json';
import FilteredPokemon from './filteredPokemon';
import './App.css';

const App = function () {
  return <FilteredPokemon pokemons={data.default} />;
};

export default App;
