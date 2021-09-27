import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { ItemBox } from '../ItemBox';
import { Loading } from '../Loading';

export function Gallery(allPokemons) {
  const pokemons = allPokemons.allPokemons;
  const onClick = allPokemons.onClick;

  return(
    <main>
      <Container>
        <Grid container spacing={3}> 
          {pokemons.length == 0 && <Loading />}
          {pokemons.length > 1 && pokemons.map(pokemon => <ItemBox key={pokemon.id} {...pokemon} onClick={onClick}/>)}   
        </Grid>
      </Container>
    </main>
  )
}


