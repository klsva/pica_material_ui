import React, { useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import Context from '../../Controllers/Context';

export function BtnAddPokemon (pokemon){
  const myPokemons = useContext(Context)
  let disabled = false

  console.log('fromBTN', pokemon);
  console.log(pokemon.id);
  console.log(pokemon.name);

  if (myPokemons.find(item => item.id == pokemon.id)){    
    disabled = true
  }

  return(
    <Button
    variant="contained" 
    size="small"
    onClick={() => pokemon.onClick(pokemon.id, pokemon.name)} 
    disabled={disabled}
    >
    Catch
    </Button>
  )
}



// export function ItemAddBtn (pokemonId, myPokemons){  

//   const [count, setCount] = useState(0);
//   const [disabled, setDisabled] = useState(false)
//   const mapping = {
//     plus: 1,
//     minus: -1,
//   }
//   const handleButtonClick = ({ target: {name} }) => {
//     setCount(mapping[name])
//     disabled ? setDisabled(false) : setDisabled(true) 
//   };
//   return(
//     <div>
//       {/* {count > 0 
//       && 
//       <button 
//         name="minus" 
//         onClick={handleButtonClick} 
//         className="btn btn_blue" 
//         >Free</button>
//       } */}
//       <button 
//         name="plus" 
//         onClick={handleButtonClick} 
//         disabled={disabled}
//         data-id={props.id}
//         data-name={props.name}
//         className="btn btn_blue add-pokemon">Catch</button>     
//     </div>
//   )
// }