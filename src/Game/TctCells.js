import React from 'react';

import './TctCells.scss';

const RenderCellValue = ({ value }) => {
    if(value === 1){
        return <div className="TctCell__value">X</div>;
    }
    return <div className="TctCell__value">O</div>;
}


const TctCells = ({ updateCellState, cellData }) => {

    const handleCellClick = () => {
        if(!cellData.value){
            updateCellState(cellData);
        }
    }

    return (
        <div onClick={handleCellClick} className="TctCell">
            {cellData.value && <RenderCellValue value={cellData.value}/>}
        </div>
    )
}

export default TctCells;
