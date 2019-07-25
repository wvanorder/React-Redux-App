import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import './App.css';

import { fetchCharacters } from './store/actions';

import CharacterList from './components/CharacterList';


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
      {props.characters && <CharacterList characters ={props.characters} />}

      <div classNAme="buttons">
        {(!props.characters && !props.isLoading) ? <button onClick={() => props.fetchCharacters()}>Fetch stuff</button> :
          <>
         <button onClick={() => props.fetchCharacters(props.prevPage)}>Previous Page </button>
         <button onClick={() => props.fetchCharacters(props.nextPage)}> Next Page</button>
         </>}
      </div>
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
