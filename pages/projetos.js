import Head from "next/head";
import React from "react";
import { Card,
    CardColumns,
    Carousel,
    Badge,
    Button
} from "react-bootstrap";
import projetosData from "../json/projetosData.json";

function Projetos() {
    return (
        <React.Fragment>

            <Head>
                <title>Projetos / Decooh.NET - Web Developer</title>
            </Head>

            <main className="content fadeInLeft speed2">
                <h2> <i className="fas fa-code" aria-hidden="true"></i> Projetos</h2>
                <p></p>
                <CardColumns>
                    {projetosData.map((data, index) => 
                        <React.Fragment key={index}>
                                <Card>
                                    <Carousel>
                                        {data.images.map((img, index) => 
                                            <Carousel.Item key={index}>
                                                <img
                                                className="d-block w-100"
                                                src={img}
                                                />
                                            </Carousel.Item>
                                        )}
                                    </Carousel>
                                    <Card.Body>
                                        <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>
                                        {data.stacks.map((stack,index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <Badge style={{fontWeight: 500}} variant="dark">{stack}</Badge> {' '}
                                                </React.Fragment>
                                            )
                                        }
                                        )}
                                        </Card.Text>
                                        <Card.Text>
                                            {data.description}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <a href={data.href[0]} target={data.href[1]}>
                                            <Button variant="dark">Ir para o projeto</Button>
                                        </a>
                                    </Card.Footer>
                                </Card>
                        </React.Fragment>
                    )}
                </CardColumns>
            </main>
            
        </React.Fragment>
    )

}

export default Projetos;