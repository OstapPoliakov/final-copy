import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import { caughtPokemonsThunk } from "../../redux/caughtPokemons-reducer";
import {CaughtPokemon} from "../CaughtPokemons/CaughtPokemon";

// контейнерная компонента
const CaughtPokemonsContainer = (props) => {
     
    useEffect(() => {
        for (let i = 0; i < props.caughtPoks.length; i++) {
            console.log(props.caughtPoks[i] + ', i = ' + i);
            props.caughtPokemonsThunk(props.caughtPoks[i]);
        }
    }, []);

    let CaughtPokemons = props.caughtPokemons.map( (pok, i) => {
        return (
            <CaughtPokemon id = {i} name = {pok.name}/>
        )
    });

    console.log('CaughtPokemons (Store): ', props.caughtPokemons);

    return (
        <>
            { props.isLoading ? <Preloader /> : null }
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