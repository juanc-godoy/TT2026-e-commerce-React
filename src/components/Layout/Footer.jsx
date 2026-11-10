import Nosotros from "../Nosotros/Nosotros"

function Footer(){
    return (
        <footer className="footer">
            <div className="footerSection">
                <div className="footerSectionA">
                    <h4><a className="footerItem" href="https://es.wikipedia.org/wiki/Pol%C3%ADtica_de_privacidad">Politicas de Privacidad</a></h4>
                    <h4 className="footerItem">Newsletter</h4>
                    <h4 className="footerItem">Sucursales</h4>
                </div>
                <div className="footerSectionB">
                    <h2 className="footerItem" >Nosotros</h2>
                    <Nosotros/>
                </div>
            </div>
            <h3 className="footerFin">Copyright 2026 - github.com/juanc-godoy</h3>
        </footer>
    )
}

export default Footer

/*
propiedad intelectual, políticas de privacidad, contacto, newsletter, sucursales o sedes, etc.
*/