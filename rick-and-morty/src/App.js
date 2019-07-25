import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Button } from 'antd';
import styled from 'styled-components';

import './App.css';
import 'antd/dist/antd.css';



import { fetchCharacters } from './store/actions';

import CharacterList from './components/CharacterList';

const ButtonHolder = styled.div`
  width: 300px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`


const App = props => {
  console.log('props: ', props)

  if(props.isLoading){
    return(
      <div className="App">
        <Loader type="Grid" color="tomato" height={80} width={80} />
      </div>
    )
  }

  return (
    <div className="App">
      <h1>1000 years of Rick and Morty!</h1>
      <ButtonHolder>
        {(!props.characters && !props.isLoading) ? <Button onClick={() => props.fetchCharacters()}>Show Me What You Got</Button> :
          <>
         {props.prevPage && <Button onClick={() => props.fetchCharacters(props.prevPage)}>Previous Page </Button>}
         {props.nextPage && <Button onClick={() => props.fetchCharacters(props.nextPage)}> Next Page</Button>}
         </>}
      </ButtonHolder>

      {props.characters && <CharacterList characters ={props.characters} />}

      {(props.nextPage || props.prevPage) && <ButtonHolder>
        {(!props.characters && !props.isLoading) ? <Button onClick={() => props.fetchCharacters()}>Fetch stuff</Button> :
          <>
         {props.prevPage && <Button onClick={() => props.fetchCharacters(props.prevPage)}>Previous Page </Button>}
         {props.nextPage && <Button onClick={() => props.fetchCharacters(props.nextPage)}> Next Page</Button>}
         </>}
      </ButtonHolder>}

      
    </div>
  );
}





const mapStateToProps = state => {
  return{
    isLoading: state.isLoading,
    error: state.error,
    characters: state.characters,
    nextPage: state.nextPage,
    prevPage: state.prevPage
  };
};



export default connect(
  mapStateToProps,
  { fetchCharacters }
)(App);
