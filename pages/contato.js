import React from "react";
import Head from "next/head";

function Contato() {

    return (
        <React.Fragment>
            <Head>
                <title>Contato / Decooh.NET - Web Developer</title>
            </Head>
                <main className="content fadeInLeft speed2">
                    <h2> <i className="fas fa-envelope" aria-hidden="true"></i> Contato</h2>
                    <p>
                        Entre em contato comigo através do meu e-mail: <strong>decoohz@gmail.com</strong>
                    </p>
                </main>
        </React.Fragment>
    )

}

export default Contato;