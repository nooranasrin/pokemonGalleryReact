import React from 'react';
import PokemonGallery from './pokemonGallery';
import './filteredPokemon.css';

const Header = () => (
  <div className='heading'>
    <h3>Pokemon Gallery</h3>
  </div>
);

const Input = props => (
  <div className='inputBox'>
    <input
      placeholder='Search...'
      value={props.value}
      onChange={event => props.onChange(event.target.value)}
    />
  </div>
);

class FilteredPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filterText: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState(() => ({ filterText: value }));
  }

  render() {
    const pokemons = this.props.pokemons.filter(pokemon =>
      pokemon.name.includes(this.state.filterText)
    );
    return (
      <div>
        <Header />
        <Input value={this.state.filterText} onChange={this.handleChange} />
        <PokemonGallery pokemons={pokemons}></PokemonGallery>
      </div>
    );
  }
}

export default FilteredPokemon;
