import Head from "next/head";
import React from "react";

function Curriculum() {

    return (
        <React.Fragment>
        <Head>
            <title>Curriculum / Decooh.NET - Web Developer</title>
        </Head>
            <main className="content fadeInLeft speed2">
                <h2> <i className="far fa-address-card" aria-hidden="true"></i> Curriculum</h2>
                <p></p>
                <h5>André Luiz De Sá Motta</h5>
                <p>
                    Brasileiro, Solteiro, 24 anos. :)<br/>
                    Santa Cruz, Rio de Janeiro, Rua Vieira Ravasco, 746 – CASA A <br/>
                    (21) 99168-2591 / (21) 3217-9637 <br/>
                    Decoohz@gmail.com
                </p>
                <h3>Objetivo Profissional</h3>
                <p>
                    Ingressar na empresa preferêncialmente como Programador JavaScript de acordo com os padrões da empresa, estou disposto a cumprir metas e ultrapassar os desafios para crescer junto com a empresa.
                </p>

                <h3>Formação Acadêmica</h3>
                <p>
                    Ensino Médio - Concluído<br/>
                    Ensino Superior - Cursando<br/>
                    4ª Período em Sistema de Informações pela UVA (Universidade Veiga de Almeida)
                </p>

                <h3>Experiência Profissional</h3>
                <p>
                    <strong>Empresa:</strong> CICLUS AMBIENTAL (3 MESES E 22 DIAS)<br/>
                    Auxiliar de Suporte de TI na empresa Ciclus entre o período de 07/10/2019 à 31/01/2020 na área de Informática, com conhecimento de configuração de cameras, infraestrutura de redes e computadores.
                </p>
                <p>
                    <strong>Empresa:</strong> CICLUS AMBIENTAL (2 ANOS)<br/>
                    Jovem Aprendiz na empresa Ciclus entre o período de 25/09/2017 à 25/09/2019 na área de Informática – TI, com o conhecimento de configuração de cameras, infraestrutura de redes e computadores.
                </p>

                <h3>Informações Complementares</h3>

                <p>
                    Conhecimento no back-end com NodeJS, Express, EJS, PHP 7 OO, PDO, PHP WebSocket (Ratchet) e básicos com frameworks como LaravelPHP, CakePHP, Slim Framework;<br/>

                    Experiências sólidas com JavaScript ES5 ou 6, ReactJS, React Native, ReactJS + NextJS, jQuery, jQuery Ajax, CSS3 e HTML5;<br/>

                    Configuração de máquinas e serviços no AWS (Amazon Web Services), EC2, Cloud9, dentre outros; <br/>

                    Experiências sólidas com MySQL e/ou MSSQL na modelagem de banco de dados, criação de tabelas, configurações de cada campo, varchar, int, date, timestamp, dentre outros, entrelaçamento de dados entre tabelas e configurações/permissões de níveis de usuários para acesso ao banco;<br/>

                    Conhecimentos e experiência sólida com servidores Linux; desde a Instalações de Softwares OpenSource como PHP-FPM, PHP 7, Nginx, Apache;<br/>

                    Ferramenta de conversão de vídeo integrada ao servidor Linux utilizando FFMPEG (linhas de comando para conversão de vídeos e cortes);<br/>

                    Preparação de servidores Linux com HLS Stream configurado utilizando Nginx RTMP Module, configurações e controle de banda para arquivos estáticos utilizando ferramentas nativas do Nginx, Limit Rate, Proxy ByPass, dentre outros;<br/>

                    Integrações de Sistemas utilizando API REST/RESTful (exemplo PagSeguro, PayPal); Crio também APIs REST/RESTful para implementação visando uma boa comunicação e/ou requisições entre servidores para inclusão de novos registros no banco de dados (útil para fornecedores e/ou clientes);<br/>

                    Inglês Avançado;
                </p>

                <h3>Cursos Complementares</h3>

                <p>
                    Desenvolvimento WEB – Linguagem de Programação PHP<br/>
                    Concluído em: 01/11/2016<br/>
                    Instituição: SoloLearn<br/>
                </p>

                <p>
                Desenvolvimento WEB – HTML5/CSS3<br/>
                Concluído: 17/11/2016<br/>
                Instituição: SoloLearn<br/>
                </p>
                
                <p>
                    Informática Avançada<br/>
                    Excel, Word e PowerPoint.
                </p>

        </main>
        </React.Fragment>
    )
}

export default Curriculum;