import './Header.scss';
import React, { Fragment } from 'react';
import { AppBar, Link } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';


export function Header() {

  let pathLogo = require(`../../assets/images/logo.png`).default
  return(
    <Fragment>
        <AppBar>
          <Toolbar>
            <Typography display='flex' flexGrow={1}>
              <Link component={RouterLink} to="/"><img src={pathLogo} alt="logo" width="150px"/></Link>
            </Typography>
            <Typography fontSize='20px' >
              <Link style={{ textDecoration: 'none', color: '#ffffff', paddingRight: '20px'}} component={RouterLink} to="/">All pokemons</Link>
              <Link style={{ textDecoration: 'none', color: '#ffffff'  }} component={RouterLink} to="/my_pokemons">My pokemons</Link>
            </Typography>       
            
          </Toolbar>
        </AppBar>
      <Toolbar />
    </Fragment>
    // <header id="header" className="header">        
    //   <div className="header__logo">
    //   <Link to="/"><img src={pathLogo} alt="logo" /></Link>
      
    //   </div>
    //   <nav>
    //     <Link to="/">All pokemons</Link>
    //     <Link to="/my_pokemons">My pokemons</Link>
    //   </nav>                
    // </header>
  )
}
