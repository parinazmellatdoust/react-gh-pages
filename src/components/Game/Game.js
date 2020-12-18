import React,{useState} from 'react'
import { calculateWinner } from '../../utils/WinnerCalculator';
import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import './Game.css';
import AndroidIcon from '@material-ui/icons/Android';
import AppleIcon from '@material-ui/icons/Apple';

export const Game= () => {
  const [cellValues,setCellValues]=useState(['','','','','','','','','']);
  const [cellShow,setCellShow]=useState(['','','','','','','','','']);
  const [xIsNext,setXIsNext]=useState(true);
  const [isGameOver,setIsGameOver]=useState(false);
  const [numberOfTurnsLeft,setNumberOfTurnsLeft]=useState(9);
  const [winner,setWinner]=useState();
  const [winningCombination,setWinningCombination]=useState([]);
  const isCellEmpty=(cellIndex)=>cellValues[cellIndex]==='';
  const restartGame=()=>{
    setCellValues(['','','','','','','','','']);
    setCellShow(['','','','','','','','','']);
    setXIsNext(true);
    setIsGameOver(false);
    setNumberOfTurnsLeft(9);
    setWinner(undefined);
    setWinningCombination([]);
  };
  const onCellClicked= (cellIndex) => { 
    if(isCellEmpty(cellIndex)){
      const newCellValues=[...cellValues];
      const newCellShow=[...cellShow];
      newCellValues[cellIndex]=xIsNext ? 'X':'O';
      newCellShow[cellIndex]=xIsNext ? <AndroidIcon style={{ fontSize: '10vmin' }}></AndroidIcon>:
      <AppleIcon style={{ fontSize: '10vmin' }}></AppleIcon>;
      const newNumberOfTurnsLeft=numberOfTurnsLeft-1;
      const calcResult=calculateWinner(newCellValues,newNumberOfTurnsLeft,cellIndex);
      setCellValues(newCellValues);
      setCellShow(newCellShow);
      setXIsNext(!xIsNext);
      setIsGameOver(calcResult.hasResult);
      setNumberOfTurnsLeft(newNumberOfTurnsLeft);
      setWinner(calcResult.winner);
      setWinningCombination(calcResult.winningCombination);
    }
  };
  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board 
          cellValues={cellValues}
          cellShow={cellShow}
          winningCombination={winningCombination}
          cellClicked={onCellClicked}
        />
    </div>
  <ResultModal 
  isGameOver={isGameOver}
  winner={winner}
  onNewGameClicked={restartGame}
  />
  </>
  );
}

