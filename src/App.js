import React from 'react';
import './App.css';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/redux-store'
import {Route, Routes, Navigate} from "react-router-dom";
import Header from './components/Header/Header';
import PokemonsListContainer from './components/PokemonsList/PokemonsListContainer';
import CaughtPokemonsContainer from './components/CaughtPokemons/CaughtPokemonsContainer';
import PokemonPageContainer from './components/PokemonPage/PokemonPageContainer';
import { PageNotFound } from './components/common/PageNotFound/PageNotFound404';
/* import { useEffect } from 'react'; */

const App = () =>  {
  // caughtPokemons хранит массив пойманных покемонов
  const [caughtPoks, setCaughtPoks] = useState([]);
/*   console.log('App.js caughtPoks:', caughtPoks); */
  
  const catchPokemon = (id, caughtTime) => {
      sessionStorage.setItem(id, caughtTime);
      /* setCaughtPoks((prev) => [...prev, id]); */
  }

  const getIdFromURL = (url) => {
    return Number(url.split("pokemon/")[1].match(/\d+/));
  }

/*   useEffect (() => {
    return () => {sessionStorage.clear()}
  },[]);
 */

  return (
    <Provider store={store}>
      <div className='app-wrapper'>
        <div className = 'app-wrapper-navbar'>
          <Header />
        </div>
        <div className = 'app-wrapper-content'>
            <Routes>
              <Route exact path="/" element = {<Navigate to="/main" />} />
              <Route path="*" element = {<PageNotFound />} />
              <Route path="/main/*" element = {<PokemonsListContainer catchPokemon = {catchPokemon} getIdFromURL = {getIdFromURL}/>} />
              <Route path="/caught/*" element = {<CaughtPokemonsContainer caughtPoks = {caughtPoks} getIdFromURL = {getIdFromURL}/>} />
              <Route path="/pokemon/:pokemonId" element = {<PokemonPageContainer /> } />
            </Routes>
        </div>
      </div>
    </Provider>
  );

}

export default App;