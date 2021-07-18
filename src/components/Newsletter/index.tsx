import { FormEvent } from 'react';
import './styles.css'

export function Newsletter() {
    function saveEmailInLocalStorage(e: FormEvent) {
        e.preventDefault();
        console.log(e);
    }

    return(
        <div className="container">
            <section className="newsletter">
                <h1>PRONTO PARA EXPERIMENTAR O QUE VEM POR AI?</h1>
                <form className="register-email" onSubmit={saveEmailInLocalStorage}>
                    <input type="text" placeholder="E-mail"/>
                    <button type="submit">CADASTRAR</button>
                </form>
            </section>
        </div>
    );
}