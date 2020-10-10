import React from 'react';
import './pokemon.css';

const PokemonExtraInfo = ({ types, weight }) => {
  const weightElement = (
    <div>
      <b>Weight : </b>
      {weight}
    </div>
  );
  const typesElement = (
    <div>
      <b>Types : </b>
      {types.join(', ')}
    </div>
  );
  return (
    <div>
      {weightElement} {typesElement}
    </div>
  );
};

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isMouseOnOver: false };
    this.handleOver = this.handleOver.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleOver() {
    this.setState(() => ({ isMouseOnOver: true }));
  }

  handleLeave() {
    this.setState(() => ({ isMouseOnOver: false }));
  }

  render() {
    const pokemonExtraInfo = (
      <PokemonExtraInfo types={this.props.types} weight={this.props.weight} />
    );
    const imageElement = <img src={this.props.url} alt=''></img>;
    const component = this.state.isMouseOnOver
      ? pokemonExtraInfo
      : imageElement;
    return (
      <div
        className='pokemon'
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
      >
        <p>{this.props.name.toUpperCase()}</p>
        {component}
      </div>
    );
  }
}

export default Pokemon;
