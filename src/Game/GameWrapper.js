import React from 'react';

import Board from './Board';

import './GameWrapper.scss';

const GameWrapper = (props) => {
    return (
        <div className="tct-wrapper">
            <div className="tct-wrapper__title">Tic-Tac-Toe</div>
            <Board/>
        </div>
    )
}

export default GameWrapper;