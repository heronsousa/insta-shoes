import './styles.css';
import jordan from '../../assets/jordan.svg';
import nike from '../../assets/nike.svg';
import adidas from '../../assets/adidas.svg';
import oakley from '../../assets/oakley.svg';

export function Brands() {
    return (
        <div className="container">
            <section className="brands">
                <article>
                    <img src={jordan} alt="Logo jordan" />
                </article>
                <article>
                    <img src={oakley} alt="Logo oakley" />
                </article>
                <article>
                    <img src={nike} alt="Logo nike" />
                </article>
                <article>
                    <img src={adidas} alt="Logo adidas" />
                </article>
            </section>
        </div>
    );
}