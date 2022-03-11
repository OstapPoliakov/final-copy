import React from "react";
/* import { useEffect } from "react"; */
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import { caughtPokemonsThunk } from "../../redux/caughtPokemons-reducer";
import {CaughtPokemon} from "../CaughtPokemons/CaughtPokemon";
import PropTypes from "prop-types";

// контейнерная компонента
const CaughtPokemonsContainer = ({ caughtPokemons, isLoading, getIdFromURL }) => {
 /*    console.log('CaughtPoksContainer, приходящие caughtPoks:', props.caughtPoks); */
/*     useEffect(() => {
        console.log('useEffect, caughtpoks.length = ',props.caughtPoks.length);
        for (let i = 0; i < props.caughtPoks.length; i++) {
            props.caughtPokemonsThunk(props.caughtPoks[i]);
        }
    }, []); */

    let CaughtPokemons = caughtPokemons.map( (pok, index) => {
        return (
            <CaughtPokemon 
                key = {index}
                id = {getIdFromURL(pok.url)}
                name = {pok.name}
            />
        )
    });

    console.log('CaughtPokemons (Store): ', caughtPokemons);

    return (
        <>
            { isLoading ? <Preloader /> : null }
            {CaughtPokemons}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        caughtPokemons: state.caughtPokemons.caughtPokemons,
        isLoading: state.caughtPokemons.isLoading
    }
}

export default connect(mapStateToProps,{ caughtPokemonsThunk })(CaughtPokemonsContainer);

CaughtPokemonsContainer.propTypes = {
    caughtPokemons: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    getIdFromURL: PropTypes.func.isRequired
}