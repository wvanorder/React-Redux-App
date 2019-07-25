import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    console.log(props.characters)
    return(
        <div>
            {props.characters.map(character => {
                return <CharacterCard key={character.id} character={character} />
            })}
        </div>
        
    )
};

export default CharacterList;