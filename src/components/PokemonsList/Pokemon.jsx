import { NavLink } from "react-router-dom";
/* import { useDispatch } from "react-redux"; */
import PropTypes from "prop-types";

// Презентационная компонента
export const Pokemon = ({id, name, isDisabled, thunk, catchPokemon}) => {

/*     const navigate = useNavigate(); */

/*     const dispatch = useDispatch(); */

/*     const openPokemon = () => {
        navigate(`/pokemon/${id}`)
    } */

    const handleButton = () => {
        thunk(id);

        const capturedTime = new Date();
        const localTime = capturedTime.toLocaleString();

        catchPokemon(id,localTime);
    }

    return (
        <>
            <div>
                id: {id} <br/>
                name: {name}
                <button onClick={handleButton} disabled = {isDisabled} >Catch</button>
            </div>
            {/* <div onClick={openPokemon}>Detail info</div> */}
            <NavLink to={`/pokemon/${id}`}>Detail info</NavLink>
        </>
    );
}

Pokemon.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    thunk: PropTypes.func.isRequired,
    catchPokemon: PropTypes.func.isRequired
}