import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonPageThunk } from "../../redux/pokemonPage-reducer";
import Preloader from "../common/Preloader/Preloader";
import { PokemonPage } from "../PokemonPage/PokemonPage";


// контейнерная компонента
const PokemonPageContainer = (props) => {
    const params = useParams();
    const pokemonId = params.pokemonId;

    const dispatch = useDispatch()
    useEffect(() => {
        console.log("HUI")
        props.getPokemonPageThunk(pokemonId)
    }, [])

 
    // отрисовываем презентационную компоненту
    return (
        <>
          {!props.isFetching &&
            <PokemonPage
                id = {props.pokemon.id}
                name = {props.pokemon.name}
                weight = {props.pokemon.weight}
                abilities = {props.pokemon.abilities}
                getPokemonPageThunk = {props.getPokemonPageThunk}
            />
            
            }
    
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        pokemon: state.pokemon.pokemon,
        isFetching: state.pokemon.isFetching
    }
}

export default connect(mapStateToProps,{ getPokemonPageThunk })(PokemonPageContainer);