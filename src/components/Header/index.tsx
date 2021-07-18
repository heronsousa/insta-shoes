import './styles.css'
import logo from '../../assets/logo.svg'
import search from '../../assets/search.svg'
import like from '../../assets/like.svg'
import cart from '../../assets/cart.svg'

export function Header() {
    return (
        <header>
            <div className="container">
                <main>
                    <img width="200px" src={logo} alt="Logo Insta Shoes" />
                    
                    <div className="tabs">
                        <a href="/"> 
                            <strong>home</strong> 
                        </a>
                        <a href="/">homem</a>
                        <a href="/">mulher</a>
                        <a href="/">criança</a>
                    </div>

                    <form>
                        <input type="text" placeholder="Ex.: Spring blade" />
                        <button type="submit">
                            <img src={search} alt="Buscar" />
                        </button>
                    </form>

                    <div className="actions">
                        <button>
                            <img src={like} alt="Favoritos" />
                        </button>
                        <button>
                            <img src={cart} alt="Carrinho" />
                        </button>
                    </div>
                </main>
            </div>
        </header>
    );
}