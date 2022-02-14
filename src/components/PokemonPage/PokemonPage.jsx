// Презентационная компонента
export const PokemonPage = ({id, name, img, weight, abilities, types, isCatched}) => {
    return (
        <>
{/*             <div>
                <img src={img} alt="pokemon"/>
            </div>  */}
            <div>
                Name: {name} <br/>
                ID: {id} <br/>
                Wight: {weight}
            </div>
            <div>
            Abilities:
            {
                abilities.length > 0 &&
                abilities.map((item, i) => (
                    <li>                                  
                        <div>{item.ability.name}</div>
                    </li>
                ))
            }
            </div>
            <div>
            Types:
            {
                types.length > 0 &&
                types.map((item) => (
                    <li>                                  
                        <div>{item.type.name}</div>
                    </li>
                ))
            }
            {isCatched ? <div>Status: catched</div> : null}
            </div>
        </>
    );
}