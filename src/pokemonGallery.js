import React from 'react';
import Pokemon from './pokemon';

const PokemonGallery = props => {
  const pokemons = props.pokemons.map(({ name, img, weight, types }, id) => (
    <Pokemon name={name} url={img} key={id} weight={weight} types={types} />
  ));
  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{pokemons}</div>;
};

export default PokemonGallery;
