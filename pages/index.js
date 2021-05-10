import Head from "next/head";
import React from "react";

function Home() {

    return (
        <React.Fragment>
        <Head>
            <title>Decooh.NET - Web Developer</title>
        </Head>
            <main className="content fadeInLeft speed2">
                <h2> <i className="fas fa-user" aria-hidden="true"></i> Sobre mim</h2>
                <div>
                    <img style={{marginRight: 10, marginBottom: 5, float: 'left'}} className="rounded-img" src="/images/decooh.jpg" width="120" height="120" />
                    <p style={{paddingTop: 15}}>
                        Olá, sou o André, mas conhecido como Decooh, tenho 24 anos, atualmente cursando Sistema de Informação no 4ª período pela UVA (Universidade Veiga de Almeida) no Rio de Janeiro, já venho programando e fazendo algumas coisas desde os meus 15 anos de idade.
                    </p>
                </div> 
                <p style={{clear: 'both'}}>
                    Atualmente desenvolvendo em Node JS + Express e React JS + Next JS, estou aprimorando conhecimentos em React Native e
                    nas horas vagas arrumando algumas coisas em PHP. :)
                </p>

            </main>
        </React.Fragment>
    )

}

export default Home;