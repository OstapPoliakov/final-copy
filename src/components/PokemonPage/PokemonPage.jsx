// Презентационная компонента
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const PokemonPage = ({id, name, img, weight, abilities= [], types, isCatched, getPokemonPageThunk}) => {
    
    const params = useParams();
    const pokemonId = params.pokemonId;

    const abila = abilities.map((element, i) => <div key={i}>{element.ability.name}</div>)
    return (
        <>
{/*             <div>
                <img src={img} alt="pokemon"/>
            </div>  */}
            <div>
                Name: {name} <br/>
                ID: {id} <br/>
                Wight: {weight}
            </div>
            {abila}
         
        </>
    );
}