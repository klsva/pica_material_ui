import React from 'react';
import { CardMedia } from '@material-ui/core';

function ImageExist(url) 
{
  let img = new Image();
  img.src = url;
  return img.height != 0;
}

export function ItemImage(pokemon) {


  let path = `http://localhost:8080/src/assets/pokemons/${pokemon.id}.png`;
  return(
    <CardMedia
      component="img"
      image={path}
      alt={pokemon.id}
    />
    // <img src={path} className="gallery-image" alt="" />
  )
}

