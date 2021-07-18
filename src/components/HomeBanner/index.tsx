import './styles.css'
import homeBanner from '../../assets/home-banner.svg';

export function HomeBanner() {
    return (
        <div className="container">
            <section className="banner">
                <aside>
                    <h1>TÊNIS AIR JORDAN COM ATÉ 50% OFF</h1>
                </aside>
                <img src={homeBanner} alt="Banner com tênis jordan" />
            </section>
        </div>
    );
}