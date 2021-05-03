import Head from "next/head";
import React from "react";

function Error() {
    
    return (
        <React.Fragment>
            <Head>
                <title>Error / Decooh.NET - Web Developer</title>
            </Head>
                <main className="content fadeInLeft speed2">
                    <h2><i className="fas fa-exclamation-triangle" aria-hidden="true"></i> 404</h2>
                    <p>
                    Certifique-se de que o endereço (URL) digitado está correto,<br/>
                    e se a página que está sendo chamada foi publicada corretamente.
                    </p>
                </main>
        </React.Fragment>
    )

}

export default Error;