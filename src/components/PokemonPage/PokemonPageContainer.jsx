import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonPageThunk } from "../../redux/pokemonPage-reducer";
import Preloader from "../common/Preloader/Preloader";
import { PokemonPage } from "../PokemonPage/PokemonPage";

// контейнерная компонента
const PokemonPageContainer = (props) => {
    const params = useParams();
    const pokemonId = params.pokemonId;


/*     console.log('params', params);
    console.log('params id: ', params.pokemonId); */
    console.log(Object.keys(props.pokemon).length);
    
    // вызов thunk при монтировании компоненты
    useEffect (() => {

        props.getPokemonPageThunk(pokemonId);
        console.log('sas')
    }, []);
    
    // отрисовываем презентационную компоненту
    return (
        <>
            { Object.keys(props.pokemon).length !== 0 ? 
            <PokemonPage
                id = {props.pokemon.id}
                name = {props.pokemon.name}
                weight = {props.pokemon.weight}
                abilities = {props.pokemon.abilities}
            /> : <div> X Y U </div>}
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