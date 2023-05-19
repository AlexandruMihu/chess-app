import './Tile.css';

interface Props{
    image?:string;
    numar:number;
}

export default function Tile({ numar, image }: Props) {
    if (numar % 2 === 0) {
        return <div className='tile dark-tile'>
            <img src={image} />
        </div>
    } else {
        return <div className='tile light-tile'>
            <img src={image} />
        </div>
    }
}