import React from 'react';

const CharacterCard = props => {
    return(
        <div>
            <h2>{props.character.name}</h2>
        </div>
    )
};

export default CharacterCard;