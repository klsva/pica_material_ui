import React, { useState, useContext, Component} from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import { ItemImage } from '../ItemImage';
import { ItemName } from '../ItemName';
import { ItemInfo } from '../ItemInfo';


export function MyItemBox(pokemon) {

  return(
    <Grid item xs={12} sm={6} md={4} lg={3} >  
      <Card
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignImems: 'center'
          }}
        > 
        <Link to={`/pokemons/${pokemon.id}`} >
          <ItemImage id={pokemon.id} />
        </Link>
        <ItemName name={pokemon.name} />
        <ItemInfo date={pokemon.date} />
      </Card> 
    </Grid>
  )
}
