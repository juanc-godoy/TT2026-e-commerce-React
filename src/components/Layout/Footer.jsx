import Nosotros from "../Nosotros/Nosotros"

function Footer(){
    return (
        <footer className="footer">
            <h2 className="footerItem" >Nosotros</h2>
            <Nosotros/>
            <a className="footerItem" href="https://es.wikipedia.org/wiki/Pol%C3%ADtica_de_privacidad">Politicas de Privacidad</a>
            <p className="footerItem">Newsletter</p>
            <p className="footerItem">Sucursales</p>
            <h3 className="footerItem">Copyright 2026 - github.com/juanc-godoy</h3>
        </footer>
    )
}

export default Footer

/*
propiedad intelectual, políticas de privacidad, contacto, newsletter, sucursales o sedes, etc.
*/