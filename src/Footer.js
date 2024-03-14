import React from "react";

function Footer() {
    const date = new Date();
    return (
        <footer className="pageFooter">
            <p>Copyright &copy; {date.getFullYear()} </p>
        </footer>
    );
}

export default Footer;
