import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPokemonsListThunk } from "../../redux/pokemons-reducer";
import { getPokemonPageThunk } from "../../redux/pokemonPage-reducer";
import Preloader from "../common/Preloader/Preloader";
import { Pokemon } from "./Pokemon";
import { caughtPokemonsThunk } from "../../redux/caughtPokemons-reducer";
/* import { PokemonPage } from "../PokemonPage/PokemonPage"; */
import PropTypes from "prop-types";

const POKEMONS_COUNT = 12;

// контейнерная компонента
const PokemonListContainer = ({getPokemonsListThunk, caughtPokemonsThunk, pokemons, isFetching, catchPokemon, getIdFromURL}) => {
    
    // задаем переменную состояния pokCount, хранящую число запрашиваемых покемонов
    const [pokCount, setPokCount] = useState(POKEMONS_COUNT);

    useEffect(() => {
        getPokemonsListThunk(pokCount);
        /*
        // Реализуем функциональность CopmponentWillUnmount(): 
            return () => {
                sessionStorage.clear();
            };
        */
    }, [pokCount]);

    let Pokemons = pokemons.map( (pok, index) => {
        
        let id = getIdFromURL(pok.url);
        
        return (
            <Pokemon
                key={ index }
                id = { id }
                name = {pok.name} 
                catchPokemon={catchPokemon}
                isDisabled = {sessionStorage.getItem( id ) ? true : false} 
                thunk = {caughtPokemonsThunk}
            />
        )
    });

    const loadMorePokemons = () => {
        setPokCount((prev) => prev + POKEMONS_COUNT);
    }

    // отрисовываем презентационную компоненту
    return (
        <>
            { isFetching ? <Preloader /> : null }
            { Pokemons }
            <button onClick={ loadMorePokemons }>Load more</button>
            <button onClick={ () => sessionStorage.clear() }> Clear sessionStorage</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons.pokemons,
        isFetching: state.pokemons.isFetching
    }
}

export default connect(mapStateToProps,{ getPokemonsListThunk, getPokemonPageThunk, caughtPokemonsThunk })(PokemonListContainer);

PokemonListContainer.propTypes = {
    getPokemonsListThunk: PropTypes.func.isRequired,
    caughtPokemonsThunk: PropTypes.func.isRequired,
    pokemons: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    catchPokemon: PropTypes.func.isRequired,
    getIdFromURL: PropTypes.func.isRequired
}