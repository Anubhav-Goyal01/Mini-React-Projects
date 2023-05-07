import React, { Component } from 'react';
import './pokecard.css'

const POKE_IMG_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
    render() {
		let imgSrc = `${POKE_IMG_API}${padToThree(this.props.id)}.png`;
        return (
            <div className='pokecard'>
                <h2 className='pokecard-title'>{this.props.name}</h2>
                <div className='pokecard-image'>
                    <img src={imgSrc} alt={this.props.name}/>
                </div>
                <h3 className='pokecard-data'>Type: {this.props.type}</h3>
                <h3 className='pokecard-data'>EXP: {this.props.exp}</h3>
            </div>
        )
    }
}

export default Pokecard;