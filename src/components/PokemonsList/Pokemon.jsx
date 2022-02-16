import { NavLink, useNavigate } from "react-router-dom";

// Презентационная компонента
export const Pokemon = ({id, name, catchPokemon, showPokemonInfo, isDisabled, getPokemonPageThunk}) => {

const navigate = useNavigate();
  const openPokemon = () => {
    navigate(`/pokemon/${id}`)
  
  }
    return (
        <>
            <div>
                id: {id} <br/>
                name: {name}
                <button onClick={() => catchPokemon(id)} disabled = {isDisabled} >Catch</button>
                {/* <button onClick={() => showPokemonInfo(id)} >Show Info</button> */}
            </div>
        <div onClick={openPokemon}>Detail info</div>
        </>
    );
}