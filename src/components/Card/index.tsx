import './styles.css'
import like from '../../assets/like.svg';

interface CardProps {
    image: string;
    name: string;
    price: string;
}

export function Card({ image, name, price }: CardProps) {
    return (
        <div className="product">
            <button>
                <img src={like} alt="Favoritar produto" />
            </button>
            <div className="info">
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>{price}</p>
                <button>COMPRAR</button>
            </div>
        </div>
    );
}