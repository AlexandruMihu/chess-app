import React, { useEffect, useRef, useState } from 'react';
import Tile from '../Tile/Tile';
import './Chessboard.css';

const axaX = ["a", "b", "c", "d", "e", "f", "g", "h"];
const axaY = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece {
    image: string;
    x: number;
    y: number;
}



const initialBoardState: Piece[] = [];

for (let p = 0; p < 2; p++) {
    const type = (p === 0) ? "b" : "w"
    const y = (p === 0) ? 7 : 0;
    const y1 = (p === 0) ? 6 : 1;

    initialBoardState.push({ image: `assets/images/rook_${type}.png`, x: 0, y: y });
    initialBoardState.push({ image: `assets/images/rook_${type}.png`, x: 7, y: y });
    initialBoardState.push({ image: `assets/images/knight_${type}.png`, x: 1, y: y });
    initialBoardState.push({ image: `assets/images/knight_${type}.png`, x: 6, y: y });
    initialBoardState.push({ image: `assets/images/bishop_${type}.png`, x: 2, y: y });
    initialBoardState.push({ image: `assets/images/bishop_${type}.png`, x: 5, y: y });
    initialBoardState.push({ image: `assets/images/queen_${type}.png`, x: 3, y: y });
    initialBoardState.push({ image: `assets/images/king_${type}.png`, x: 4, y: y });
    for (let i = 0; i < 8; i++) {
        initialBoardState.push({ image: `assets/images/pawn_${type}.png`, x: i, y: y1 })
    }
}

export default function Chessboard() {

    const [activePiece, setActivePiece] = useState<HTMLElement | null>(null);
    const [gridX,setGridX] = useState(0);
    const [gridY,setGridY] = useState(0);
    const [pieces,setPieces] = useState<Piece[]>(initialBoardState)
   


    function grabPiece(e: React.MouseEvent) {
        const chessboard = chessboardRef.current;
        const element = e.target as HTMLElement;
        if (element.classList.contains("chess-piece")&&chessboard) {
            setGridX(Math.floor((e.clientX - chessboard.offsetLeft) / 100));
            setGridY(Math.floor((800 - (e.clientY - chessboard.offsetTop)) / 100));


            const x = e.clientX - 50;
            const y = e.clientY - 50;
            element.style.position = "absolute"
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            setActivePiece(element)
            
        }
    }

    function movePiece(e: React.MouseEvent) {
        const chessboard = chessboardRef.current;

        if (activePiece && chessboard) {
            const minX = chessboard.offsetLeft-25;
            const minY = chessboard.offsetTop-10;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75 ;
            const maxY = chessboard.offsetTop + chessboard.clientHeight -88;

            const x = e.clientX - 50;
            const y = e.clientY - 50;

            activePiece.style.position = "absolute"
           

            if(x<minX){
                activePiece.style.left = `${minX}px `;
            }
            else if(x>maxX){
                activePiece.style.left = `${maxX}px `;
            }
            else{
                activePiece.style.left = `${x}px `;
            }

            if(y<minY){
                activePiece.style.top = `${minY}px `;
            }
            else if(y>maxY){
                activePiece.style.top = `${maxY}px `;
            }
            else{
                activePiece.style.top = `${y}px `;
            }
            
        }
    }

    function dropPiece(e: React.MouseEvent) {
        const chessboard = chessboardRef.current;
        if (activePiece && chessboard) {
          const [x, y] = [
            Math.floor((e.clientX - chessboard.offsetLeft) / 100),
            Math.floor((800 - (e.clientY - chessboard.offsetTop)) / 100),
          ];
    
          setPieces((prevPieces) => {
            const updatedPieces = prevPieces.map((piece) => {
              if (piece.x === gridX && piece.y === gridY) {
                piece.x = x;
                piece.y = y;
              }
              return piece;
            });
            return updatedPieces;
          });
            setActivePiece(null);
        }
    }
    const chessboardRef = useRef<HTMLDivElement>(null);
    let board = [];
    for (let i = axaY.length - 1; i >= 0; i--) {
        for (let j = 0; j < axaX.length; j++) {
            let im = undefined;
            pieces.forEach(p => {
                if (p.x === j && p.y === i)
                    im = p.image
            });
            board.push(
                <Tile key={`${i},${j}`} image={im} numar={i + j} />
            );

        }
    }


    return <div
        onMouseMove={e => movePiece(e)}
        onMouseDown={e => grabPiece(e)}
        onMouseUp={e => dropPiece(e)}

        id="chessboard"
        ref={chessboardRef}
    >
        {board}
    </div>
}