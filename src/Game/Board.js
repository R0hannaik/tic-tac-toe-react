import React, { Fragment, useState, useEffect } from 'react';

import TctCells from './TctCells';

import './Board.scss';

const arrayCreator = () =>{
    let boardArray = [];
    for( let i = 1; i <= 9; i++ ){
        boardArray.push({
            value: null,
            id: i
        });
    };
    return boardArray;
};

const Board = () => {

    const [cellState, setCellState] = useState(arrayCreator);

    const [playerToken, setPlayerToken] = useState(1);

    const [winner, setWinner] = useState(null);

    useEffect(()=>{
        checkWinner();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[playerToken]);

    useEffect(()=>{
        if(winner){
            window.alert(`Player ${winner} wins`);
            resetGame();
        }
    },[winner]);

    const playerChange = () => {
        if(playerToken === 1){
            return setPlayerToken(2);
        };
        setPlayerToken(1);
    };

    const resetGame = () => {
        setCellState(arrayCreator);
        setPlayerToken(1);
        setWinner(null);
    }

    const checkWinner = () => {
        if(cellState[0].value === cellState[1].value && cellState[1].value === cellState[2].value){
            if(cellState[0].value && cellState[1].value && cellState[2].value){
                setWinner(cellState[0].value);
            };
        };
        if(cellState[3].value === cellState[4].value && cellState[4].value === cellState[5].value){
            if(cellState[3].value && cellState[4].value && cellState[5].value){
                setWinner(cellState[3].value);
            };
        };
        if(cellState[6].value === cellState[7].value && cellState[7].value === cellState[8].value){
            if(cellState[6].value && cellState[7].value && cellState[8].value){
                setWinner(cellState[6].value);
            };
        };
        if(cellState[0].value === cellState[3].value && cellState[3].value === cellState[6].value){
            if(cellState[0].value && cellState[3].value && cellState[6].value){
                setWinner(cellState[0].value);
            };
        };
        if(cellState[0].value === cellState[4].value && cellState[4].value === cellState[8].value){
            if(cellState[0].value && cellState[4].value && cellState[8].value){
                setWinner(cellState[0].value);
            };
        };
        if(cellState[2].value === cellState[5].value && cellState[5].value === cellState[8].value){
            if(cellState[2].value && cellState[5].value && cellState[8].value){
                setWinner(cellState[2].value);
            };
        };
        if(cellState[2].value === cellState[4].value && cellState[4].value === cellState[6].value){
            if(cellState[2].value && cellState[4].value && cellState[6].value){
                setWinner(cellState[2].value);
            };
        };
        if(cellState[1].value === cellState[4].value && cellState[4].value === cellState[7].value){
            if(cellState[1].value && cellState[4].value && cellState[7].value){
                setWinner(cellState[1].value);
            };
        };
    };

    const updateCellState = (cellData) => {
        if(!cellData.value){
            let newCellState = [...cellState];
            // eslint-disable-next-line array-callback-return
            newCellState.map((iCell)=>{
                if(iCell.id === cellData.id){
                    iCell.value = playerToken;
                };
            });
            setCellState(newCellState);
            playerChange();
        };
    };

    return (
        <>
            <div className="Wrapper">
                <div className="Board">
                    {cellState.map((iCells)=>{
                        return (
                            <Fragment key={iCells.id}>
                                <TctCells updateCellState={updateCellState} cellData={iCells}/>
                            </Fragment>
                        )
                    })}
                </div>
            </div>
            <div className="Wrapper-button">
                <button onClick={resetGame}>Reset</button>
            </div>
        </>
    );
};

export default Board;