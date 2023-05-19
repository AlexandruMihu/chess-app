import React from 'react';
import Tile from '../Tile/Tile';
import './Chessboard.css';

const axaX = ["a", "b", "c", "d", "e", "f", "g", "h"];
const axaY = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece{
    image:string;
    x:number;
    y:number;
}

const pieces:Piece[] = [];

for(let p = 0; p < 2; p++){
    const type = (p === 0) ? "b" : "w"
    const y = (p ===0) ? 7 : 0;
    const y1 = (p===0) ? 6 : 1;
    
    pieces.push({image: `assets/images/rook_${type}.png`,x:0,y:y});
    pieces.push({image: `assets/images/rook_${type}.png`,x:7,y:y});
    pieces.push({image: `assets/images/knight_${type}.png`,x:1,y:y});
    pieces.push({image: `assets/images/knight_${type}.png`,x:6,y:y});
    pieces.push({image: `assets/images/bishop_${type}.png`,x:2,y:y});
    pieces.push({image: `assets/images/bishop_${type}.png`,x:5,y:y});
    pieces.push({image: `assets/images/queen_${type}.png`,x:3,y:y});
    pieces.push({image: `assets/images/king_${type}.png`,x:4,y:y});
    for(let i = 0;i<8;i++){
        pieces.push({image: `assets/images/pawn_${type}.png`,x:i,y:y1})
    }
}



export default function Chessboard() {

    let board = [];
    for (let i = axaY.length - 1; i >= 0; i--) {
        for (let j = 0; j < axaX.length; j++) {
            let im = undefined;
            pieces.forEach( p => {
                 if( p.x === j && p.y === i)
                 im = p.image
            } );
            board.push(
                <Tile  key={`${i},${j}`} image = {im} numar={i + j} />
            );

        }
    }


    return <div id="chessboard">
        {board}
    </div>
}