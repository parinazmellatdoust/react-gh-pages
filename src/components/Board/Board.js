import React from 'react'
import { Cell } from '../Cell/Cell';
import './Board.css';
import Grid from '@material-ui/core/Grid';

export const Board= (props) => {
  const cellShow=props.cellShow.map((value,index) => { return value;});
  const cells=props.cellValues.map((value,index)=>{
    const canHighLight=props.winningCombination &&
                       props.winningCombination.indexOf(index)>=0;

    return <Cell
              key={index} 
              value={cellShow[index]} 
              canHighLight={canHighLight} 
              onClick={()=>props.cellClicked(index)}/>;
});
  return (
  <Grid container spacing={3} >        
        <Grid item xs={4} id="board">
          {cells}
        </Grid>
      </Grid>
  );
}

