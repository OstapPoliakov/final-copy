import PropTypes from "prop-types";

// Презентационная компонента
export const PokemonPage = ({id, name, img = "", weight, abilities = [], types = [], isCatched}) => {
    
    const abils = abilities.map((element, i) => <div key={i}>{element.ability.name}</div>);
    const tps = types.map((element, i) => <div key={i}>{element.type.name}</div>);
    
    return (
        <>
            <div>
                <img src={img} alt="pokemon"/>
            </div>
            <div>
                Name: {name} <br/>
                ID: {id} <br/>
                Wight: {weight}
            </div>
            <div>
                <u>Abilities:</u> <br/> {abils}
            </div>
            <div>
                <u>Types:</u> <br/> {tps}
            </div>
            {isCatched ? <div>Status: catched</div> : null}
        </>
    );
}

PokemonPage.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    weight: PropTypes.number.isRequired,
    abilities: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
    isCatched: PropTypes.bool.isRequired
}