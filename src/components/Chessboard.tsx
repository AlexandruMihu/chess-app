import React from 'react';
import './Chessboard.css';

const axaX = ["a", "b", "c", "d", "e", "f", "g", "h"];
const axaY = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function Chessboard() {

    let board = [];
    for (let i = axaY.length - 1; i >= 0; i--) {
        for (let j = 0; j < axaX.length; j++) {

            if((i+j) %2 === 0)
            {
                board.push(
                    <div className='tile dark-tile'></div>
                    );

            }
            else{
                board.push(
            <div className='tile light-tile'></div>
            );
            }
            
        }
    }


    return <div id="chessboard">
        {board}
    </div>
}