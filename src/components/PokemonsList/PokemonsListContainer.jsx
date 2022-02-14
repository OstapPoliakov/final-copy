import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPokemonsListThunk } from "../../redux/pokemons-reducer";
import Preloader from "../common/Preloader/Preloader";
import { Pokemon } from "./Pokemon";
import { PokemonPage } from "../PokemonPage/PokemonPage";

const POKEMONS_COUNT = 12;

// контейнерная компонента
const PokemonListContainer = (props) => {
    
    // задаем переменную состояния pokCount, хранящую число запрашиваемых покемонов
    const [pokCount, setPokCount] = useState(POKEMONS_COUNT);
     // caughtPokemons хранит массив пойманных покемонов
/*     const [caughtPokemons, setCaughtPokemons] = useState([]);

    const catchPokemon = (id) => {
        sessionStorage.setItem(id, 'true');
        console.log(caughtPokemons);
        setCaughtPokemons((prev) => [...prev, id]);
        console.log(caughtPokemons);
    } */
 
    useEffect(() => {
        props.getPokemonsListThunk(pokCount);
/*         return () => {
            sessionStorage.clear();
        }; */
    }, [pokCount]);

    let Pokemons = props.pokemons.map( (pok, i) => {
        return (
            <Pokemon id = { i + 1 } name = {pok.name} catchPokemon={props.catchPokemon} isDisabled = {sessionStorage.getItem(i+1) ? true : false}/>
        )
    });

/*     let showPokemonInfo = () => {
        return (
            <PokemonPage id = { i + 1 } name = {pok.name} catchPokemon={catchPokemon}/>
        )
    } */

    const loadMorePokemons = () => {
        setPokCount((prev) => prev + POKEMONS_COUNT);
    }

    // отрисовываем презентационную компоненту
    return (
        <>
            { props.isFetching ? <Preloader /> : null }
            { Pokemons }
            <button onClick={ loadMorePokemons }>Load more</button>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons.pokemons,
        isFetching: state.pokemons.isFetching
    }
}

export default connect(mapStateToProps,{ getPokemonsListThunk })(PokemonListContainer);