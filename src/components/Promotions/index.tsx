import { Card } from '../Card'; 

import './styles.css'
import shoes1 from '../../assets/shoes1.svg';
import shoes2 from '../../assets/shoes2.svg';
import shoes3 from '../../assets/shoes3.svg';
import shoes4 from '../../assets/shoes4.svg';
import shoes5 from '../../assets/shoes5.svg';
import shoes6 from '../../assets/shoes6.svg';

export function Promotions() {
    const products1 = [
        {
            image: shoes1,
            name: "Nike Air Jordan Retrô",
            price: "R$ 599,90" 
        },
        {
            image: shoes2,
            name: "Nike Air Jordan Black Cement",
            price: "R$ 659,90" 
        },
        {
            image: shoes3,
            name: "Nike Air Jordan 1 Chicago",
            price: "R$ 369,90" 
        },
    ]

    const products2 = [
        {
            image: shoes4,
            name: "Nike Air Jordan XI Grape ",
            price: "R$ 429,90" 
        },
        {
            image: shoes5,
            name: "Nike Air Jordan VI Carmine",
            price: "R$ 299,90" 
        },
        {
            image: shoes6,
            name: "Nike Air Jordan IX Still",
            price: "R$ 689,90" 
        },
    ]

    return(
        <div className="container">
            <section className="promo">
                <h1>Ofertas</h1>

                <div className="products">
                    {products1.map(product => (
                        <Card
                            key={product.name}
                            price={product.price} 
                            name={product.name} 
                            image={product.image} 
                        />
                    ))}
                </div>

                <div className="mid-banner">
                    <strong>Lorem Ipsum is simply </strong>
                    <p>Lorem Ipsum is simply </p>
                </div>

                <div className="products">
                    {products2.map(product => (
                        <Card
                            key={product.name}
                            price={product.price} 
                            name={product.name} 
                            image={product.image} 
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}