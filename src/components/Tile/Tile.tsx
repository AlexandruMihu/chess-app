import './Tile.css';

interface Props {
    image?: string;
    numar: number;
}


export default function Tile({ numar, image }: Props) {
    const isDarkTile = numar % 2 === 0;
    const tileClassName = isDarkTile ? 'tile dark-tile' : 'tile light-tile';
    const pieceClassName = 'chess-piece';
  
    return (
      <div className={tileClassName}>
        {image && <div className={pieceClassName} style={{ backgroundImage: `url(${image})` }} />}
      </div>
    );
  }