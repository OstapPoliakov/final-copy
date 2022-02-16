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

const App = () =>  {
  // caughtPokemons хранит массив пойманных покемонов
  const [caughtPoks, setCaughtPoks] = useState([]);

  const catchPokemon = (id) => {
      sessionStorage.setItem(id, 'true');
      setCaughtPoks((prev) => [...prev, id]);
  }

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
              <Route path="/main/*" element = {<PokemonsListContainer catchPokemon = {catchPokemon} />} />
              <Route path="/caught/*" element = {<CaughtPokemonsContainer caughtPoks = {caughtPoks} />} />
              <Route path="/pokemon/:pokemonId" element = {<PokemonPageContainer /> } />
            </Routes>
        </div>
      </div>
    </Provider>
  );

}

export default App;