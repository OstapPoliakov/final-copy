import PropTypes from "prop-types";

// Презентационная компонента
export const CaughtPokemon = ({id, name}) => {
    return (
        <>
            <div>
                id: {id} <br/>
                name: {name}
            </div>
        </>
    );
}

CaughtPokemon.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}