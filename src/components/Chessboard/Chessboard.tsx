import React, { useRef } from 'react';
import Tile from '../Tile/Tile';
import './Chessboard.css';

const axaX = ["a", "b", "c", "d", "e", "f", "g", "h"];
const axaY = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece {
    image: string;
    x: number;
    y: number;
}

const pieces: Piece[] = [];

for (let p = 0; p < 2; p++) {
    const type = (p === 0) ? "b" : "w"
    const y = (p === 0) ? 7 : 0;
    const y1 = (p === 0) ? 6 : 1;

    pieces.push({ image: `assets/images/rook_${type}.png`, x: 0, y: y });
    pieces.push({ image: `assets/images/rook_${type}.png`, x: 7, y: y });
    pieces.push({ image: `assets/images/knight_${type}.png`, x: 1, y: y });
    pieces.push({ image: `assets/images/knight_${type}.png`, x: 6, y: y });
    pieces.push({ image: `assets/images/bishop_${type}.png`, x: 2, y: y });
    pieces.push({ image: `assets/images/bishop_${type}.png`, x: 5, y: y });
    pieces.push({ image: `assets/images/queen_${type}.png`, x: 3, y: y });
    pieces.push({ image: `assets/images/king_${type}.png`, x: 4, y: y });
    for (let i = 0; i < 8; i++) {
        pieces.push({ image: `assets/images/pawn_${type}.png`, x: i, y: y1 })
    }
}



export default function Chessboard() {

    let activePiece: HTMLElement | null = null

    function grabPiece(e: React.MouseEvent) {
        const element = e.target as HTMLElement;
        if (element.classList.contains("chess-piece")) {
            console.log(e)
            const x = e.clientX - 50;
            const y = e.clientY - 50;
            element.style.position = "absolute"
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
            activePiece = element;
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
        if (activePiece) {
            activePiece = null
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