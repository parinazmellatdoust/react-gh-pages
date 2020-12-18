import React from 'react';
import './ResultModal.css';
import classNames from 'classnames';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
export const ResultModal= (props) => {
 const resultModalClasses=classNames({
    'modal-open': props.isGameOver

 });
 const message=props.winner ? `Winner is ${props.winner}.`:'It is a Tie.';
  return (
    <div id="modal-overlay" className={resultModalClasses}>
        <div id="game-result-modal">
            <div id="result-container">
                <div id="winner-container">
                    <span >{message}</span>
                    <EmojiEventsIcon style={{ fontSize: '2.5vmin' }}></EmojiEventsIcon>
                </div>
            </div>
            <div id="new-game-container">
                <button id="new-game-button"
                onClick={props.onNewGameClicked}>Start New Game</button>
            </div>
        </div>
    </div>
  );
}

