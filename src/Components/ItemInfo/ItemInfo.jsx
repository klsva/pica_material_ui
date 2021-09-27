import React from "react";
import { Typography } from '@material-ui/core';
import { CardContent } from '@material-ui/core';

export function ItemInfo(date){
  return(
    <CardContent>
      <Typography 
        gutterBottom 
        component="div"
        align="center"
      >
        You've caught it at <br/>
        {date.date}
      </Typography>
    </CardContent>
  )   
}
