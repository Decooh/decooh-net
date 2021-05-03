import React from "react";

function Footer() {
    return (
        <React.Fragment>
            <footer id="footer">
                Feito com <i className="fas fa-heart text-red" aria-hidden="true"></i> por mim em React.js + Next.js. <br/>
                <a href="https://github.com/Decooh" target="_blank">Github</a> • {' '} 
                <a href="https://fb.com/Decoohz" target="_blank">Facebook</a>
            </footer>
        </React.Fragment>
    )
}

export default Footer;