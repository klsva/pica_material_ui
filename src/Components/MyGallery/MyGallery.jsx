import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { MyItemBox } from '../MyItemBox';


export function MyGallery(myPokemons) {
  const pokemons = myPokemons.myPokemons;

  return(
    <main>
      <Container>
        <Grid container spacing={2}>
          {pokemons.length === 0 && <div>You have not got any pokemons!</div>}
          {pokemons.length > 0 && pokemons.map(pokemon => <MyItemBox key={pokemon.id} {...pokemon} />)}   
        </Grid>
      </Container>
    </main>
  )
}
