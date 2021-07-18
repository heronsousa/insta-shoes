import { useState } from 'react';
import { FormEvent } from 'react';
import './styles.css'

export function Newsletter() {
    const [email, setEmail] = useState('');

    function saveEmailInLocalStorage(e: FormEvent) {
        e.preventDefault();

        localStorage.setItem("email", email);
    }

    return(
        <div className="container">
            <section className="newsletter">
                <h1>PRONTO PARA EXPERIMENTAR O QUE VEM POR AI?</h1>
                <form className="register-email" onSubmit={saveEmailInLocalStorage}>
                    <input type="text" placeholder="E-mail" onChange={e => { setEmail(e.target.value) }} />
                    <button type="submit">CADASTRAR</button>
                </form>
            </section>
        </div>
    );
}