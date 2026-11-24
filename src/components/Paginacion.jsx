
const Paginacion=({ paginaActual=1, totalPaginas=1, irAPagina, paginaSiguiente, paginaAnterior,
        maximoVisible=5, deshabilitado=false})=>{

    const totalSeguro=Math.max(1,totalPaginas)
    
    const obtenerNumeroPaginas=()=>{
        const mitad= Math.floor(maximoVisible/2)
        let inicio= Math.max(1, paginaActual - mitad)
        let fin= Math.min(totalSeguro, inicio + maximoVisible - 1)

        if (fin-inicio+1<maximoVisible){
            inicio=Math.max(1, fin- maximoVisible + 1)
        }

        const paginas=[]
        for (let i= inicio; i <= fin; i++){
            paginas.push(i)
        }
        return paginas  
    }//fin OBTENER NUMERO PAGINAS

    const paginasVisibles= obtenerNumeroPaginas()
    const anteriorDeshabilitado= deshabilitado || paginaActual <=1
    const siguienteDeshabilitado= deshabilitado || paginaActual >=totalSeguro

    return (
        <nav className="paginacion">
            <button className="btnFlecha" onClick={paginaAnterior}
                    type="button" disabled={anteriorDeshabilitado} >
                &lt;
            </button>
          {paginasVisibles.map((numero)=>(
            <button key={numero} type="button" className="btnPagina"
            onClick={()=> irAPagina(numero)} disabled={deshabilitado}
            /* aria-current={numero === paginaActual ? 'page' : undefined} */>
              {numero}
            </button>
          ))}
            <button className="btnFlecha" onClick={paginaSiguiente}
                    type="button" disabled={siguienteDeshabilitado}>
                &gt;
            </button>
        </nav>
    )
}
export default Paginacion
/*
*/