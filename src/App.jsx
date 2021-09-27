import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Context from './Controllers/Context';
import { Switch, Route } from 'react-router-dom';

import { Gallery } from './Components/Gallery';
import { MyGallery } from './Components/MyGallery';
import { PokemonPage } from './Components/PokemonPage';
import {Header} from './Components/Header';
import { format } from 'date-fns';

import 'assets/main.scss';
import 'assets/images/logo.png';

//img import
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(require.context('assets/pokemons', false, /\.(png)$/));

function App() { //отрисуй-ка мне новый элемент App

  //POKEMONS DB
  const [allPokemons, setAllPokemons] = useState([]);
  const [myPokemons, setMyPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function(){
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  useEffect(() => {
    if (fetching){
      axios.get(`http://localhost:8000/pokemons?_page=${currentPage}&_limit=12`)
          .then(response => {
            setAllPokemons([...allPokemons, ...response.data])

            setCurrentPage(currentPage => currentPage + 1)
          })
          .finally(() => {setFetching(false)})
    }    
  }, [fetching])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
      setFetching(true)
    }
  }

  function catchPokemon(id, name){
    setMyPokemons(myPokemons.concat([{
      id: id,
      name: name,
      date: format(new Date(), 'do MMMM Y')
    }]))
  } 
  console.log('MyPokemons', myPokemons)


  return( 
    <Context.Provider value={myPokemons}>
      <Header />
      <Switch>
        <Route exact path="/" render={(props) => <Gallery {...props} allPokemons={allPokemons} onClick={catchPokemon}/>}  />
        <Route path='/my_pokemons' render={(props) => <MyGallery {...props} myPokemons={myPokemons}/>} />
        <Route path="/pokemons/:id" render={(props) => <PokemonPage {...props} myPokemons={myPokemons} onclick={catchPokemon}/>} /> 
      </Switch>
    </Context.Provider>
  )
}

export default App;