import { NavLink } from "react-router-dom";

// Презентационная компонента
export const Pokemon = ({id, name, catchPokemon, showPokemonInfo, isDisabled}) => {
    return (
        <>
            <div>
                id: {id} <br/>
                name: {name}
                <button onClick={() => catchPokemon(id)} disabled = {isDisabled} >Catch</button>
                {/* <button onClick={() => showPokemonInfo(id)} >Show Info</button> */}
            </div>
        <NavLink to = {'/pokemon/' + id}>Detail info</NavLink>
        </>
    );
}