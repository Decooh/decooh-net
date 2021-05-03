import React from "react";
import Head from "next/head";
import Link from "next/link";
// import CssDefault from "./CssDefault";

function Header() {

    const toggleMenu = () => document.querySelector("#menu").classList.contains("show-menu") ? document.querySelector("#menu").classList.remove("show-menu") : document.querySelector("#menu").classList.add("show-menu");

    return (
        <React.Fragment>
            <a 
                href="#!" 
                onClick={() => document.querySelector("#menu").classList.add("show-menu")}
                id="open-menu-mobile"
                className="fadeInLeft speed1"
            >
                <i className="fas fa-bars" aria-hidden="true"></i>
            </a>
            <nav id="menu" className="fadeInLeft speed1">
                <div align="center">
                    <a  
                        onClick={toggleMenu}
                        id="close-menu-mobile"
                    ><i className="fas fa-chevron-circle-left" aria-hidden="true"></i></a>
                </div>
                <section id="menu-body">
                    <div style={{display: ''}}>
                        <section id="profile-info" align="center">
                            <img className="rounded-img" src="/images/logo.jpg" width="50" height="50" />
                            <ul id="menu-list" style={{paddingInlineStart: 0, listStyleType: 'none'}} onClick={toggleMenu}>
                                <li>
                                    <Link 
                                        href="/"
                                    >
                                        <a>
                                        <i style={{fontSize: 24, paddingBottom: 15}} className="fas fa-home" aria-hidden="true"></i><br/>
                                        <span>Home</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/contato"
                                    >
                                        <a>
                                        <i style={{fontSize: 24, paddingBottom: 15}} className="fas fa-envelope" aria-hidden="true"></i><br/>
                                        <span>Contato</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/projetos" 
                                    >
                                        <a>
                                        <i style={{fontSize: 24, paddingBottom: 15}} className="fas fa-code" aria-hidden="true"></i><br/>
                                        <span>Projetos</span>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link 
                                        href="/curriculum"
                                    >
                                        <a>
                                        <i style={{fontSize: 24, paddingBottom: 15}} className="far fa-address-card" aria-hidden="true"></i><br/>
                                        <span>Curriculum</span>
                                        </a>
                                    </Link>
                                </li>
                                {/* <li><strong> &copy; 2021</strong></li> */}
                            </ul>
                        </section>
                    </div>
                </section>
            </nav>
        </React.Fragment>
    )

}

export default Header;