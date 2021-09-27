import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { ItemImage } from "../ItemImage";
import { ItemName } from "../ItemName";
import { ItemInfo } from "../ItemInfo";
import { Paper } from "@material-ui/core";
import { Box } from "@material-ui/core";

export function PokemonPage(props){
  const id = props.match.params.id
  const onClickFunc = props.onclick
  const myPokemons = props.myPokemons
  const [pokemon, setPokemon] = useState([])
  const [fetching, setFetching] = useState(true);

  const checkInMyPokemons = id => {
    return myPokemons.filter(item => item.id == id)
  }
  let date = checkInMyPokemons(id)

  useEffect(() => {
    if (fetching){
      axios.get(`http://localhost:8000/pokemons/${id}`)
            .then(response => { setPokemon(response.data) })
            .finally(() => {setFetching(false)})
    }
  }, [])

  return(
    // <Fragment>
    //   {pokemon.length === 0 && <Loading />}
    //   <ItemImage id={pokemon.id} />
    //   <ItemName name={pokemon.name} />
    //   {/* <ItemInfo date={pokemon.date} /> */}
    // </Fragment>
    <Paper
    sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignImems: 'center',
      margin: '0 auto',
      width: '50%'
      }}
    > 
    <ItemImage id={pokemon.id} />
    <ItemName name={pokemon.name} />
    {/* {date.length == 0 && <BtnAddPokemon pokemon ={pokemon} onClick={onClickFunc}/>} */}
    {date.length == 0 && <Box component="div" align="center">Вы еще не поймали этого покемона</Box>}
    {date.length > 0 && <ItemInfo date={date[0].date} />}
  </Paper> 
  )
}