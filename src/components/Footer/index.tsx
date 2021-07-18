import './styles.css'
import linkedin from '../../assets/linkedin.svg';
import insta from '../../assets/insta.svg';
import github from '../../assets/github.svg';

export function Footer() {
    return (
        <footer>
            <div className="container">
                <main>
                    <div className="person">
                        <p>Desenvolvido por: <strong>Heron Rodrigues</strong></p>

                        <div className="socials">
                            <a href="https://www.linkedin.com/in/heronsousa/" target="_blank"> <img src={linkedin} alt="Linkedin Heron Rodrigues" /> </a>
                            <a href="https://github.com/heronsousa" target="_blank"> <img src={github} alt="Github Heron Rodrigues" /> </a>
                        </div>
                    </div>
                </main>
            </div>
        </footer>
    );
}