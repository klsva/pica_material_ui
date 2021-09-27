import React from 'react';
import { Typography } from '@material-ui/core';
import { CardContent } from '@material-ui/core';

export function ItemName(pokemon) {

  return(
    <CardContent>
      <Typography 
        gutterBottom 
        variant="h6" 
        component="h6"
        align="center"
      >
      {pokemon.name}
      </Typography>
    </CardContent>
  )
}
