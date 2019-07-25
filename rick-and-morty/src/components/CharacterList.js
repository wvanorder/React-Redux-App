import React from 'react';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const Listy = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`

const CharacterList = props => {
    console.log(props.characters)
    return(
        <Listy>
            {props.characters.map(character => {
                return <CharacterCard key={character.id} character={character} />
            })}
        </Listy>
        
    )
};

export default CharacterList;