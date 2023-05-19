import './Tile.css';

interface Props {
    image?: string;
    numar: number;
}

export default function Tile({ numar, image }: Props) {
    if (numar % 2 === 0) {
        return <div className='tile dark-tile'>
           {image && <div style={{ backgroundImage: `url(${image})` }} className='chess-piece'>

            </div>}

        </div>
    } else {
        return <div className='tile light-tile'>
            {image && <div style={{ backgroundImage: `url(${image})` }} className='chess-piece'>

            </div>}
        </div>
    }
}