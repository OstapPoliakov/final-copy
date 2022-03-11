import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPokemonPageThunk } from "../../redux/pokemonPage-reducer";
import { PokemonPage } from "../PokemonPage/PokemonPage";
import Preloader from "../common/Preloader/Preloader";
import PropTypes from "prop-types";

// контейнерная компонента
const PokemonPageContainer = ({pokemon, isFetching}) => {
    const params = useParams();
    const pokemonId = params.pokemonId;
    const dispatch = useDispatch();

    console.log('pokemonId', pokemonId);

    useEffect(() => {
        
        if (pokemonId) {
            dispatch(getPokemonPageThunk(pokemonId));
        }

        console.log('use effect');
    }, [pokemonId])

    console.log('obj pokemon: ', pokemon);
    console.log('isFetching: ', isFetching);

    // отрисовываем презентационную компоненту
    return (
        <>
        { isFetching ? <Preloader /> :
            <PokemonPage
                id = {pokemon.id}
                name = {pokemon.name}
                img = {pokemon.sprites.other['official-artwork'].front_default}
                weight = {pokemon.weight}
                abilities = {pokemon.abilities}
                types = {pokemon.types}
                isCatched={sessionStorage.getItem(pokemonId) ? true : false}
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

export default connect(mapStateToProps)(PokemonPageContainer);

PokemonPageContainer.propTypes = {
    pokemon: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
}