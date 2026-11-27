import { useState, useEffect } from "react";
import { collection, query, orderBy, limit, startAfter,
    getDocs, getCountFromServer} from "firebase/firestore"

const usePaginacion= ({db, nombreColeccion, tamanoPagina=6,
    campoOrden="nombre", direccionOrden="asc"})=>{
        const [elementos, setElementos]= useState([])
        const [paginaActual, setPaginaActual]= useState(1)
        const [totalPaginas, setTotalPaginas]= useState(1)
        const [cargando, setCargando]= useState(true)
        const [ultimosDocs,setUltimosDocs]= useState({})
        const [recargarContador, setRecargarContador]= useState(0)

        const recargar = ()=>{
            setUltimosDocs({})
            setRecargarContador((anterior)=> anterior+1)
        }

        useEffect(()=>{
            const calcularTotalPaginas= async()=>{
                try {
                    const coleccionRef= collection(db, nombreColeccion)
                    const snapshot= await getCountFromServer(coleccionRef)
                    const totalProductos=snapshot.data().count
                    const paginas= Math.max(1, Math.ceil(totalProductos/tamanoPagina))
                    setTotalPaginas(paginas);

                    if (paginaActual> paginas){
                        setPaginaActual(paginas)
                    }
                } catch (error) {
                    console.error("Error al contar las cantidades", error)
                }
            }
            calcularTotalPaginas()
        },[db, nombreColeccion, tamanoPagina, recargarContador, paginaActual])

        useEffect(()=>{
            const traerProductosDeLaPagina= async()=>{
                setCargando(true)
                try {
                    const coleccionRef= collection(db, nombreColeccion)
                    let consulta

                    if (paginaActual===1){
                        consulta=query(coleccionRef, orderBy(campoOrden,direccionOrden), limit(tamanoPagina))
                    } else{
                        let documentoAnterior= ultimosDocs[paginaActual-1]
                        if (!documentoAnterior){
                            let docPaso= null
                            for (let p=1; p < paginaActual; p++){
                                const consultaPaso= docPaso
                                ? query(coleccionRef, orderBy(campoOrden,direccionOrden), startAfter(docPaso), limit(tamanoPagina))
                                : query(coleccionRef, orderBy(campoOrden, direccionOrden), limit(tamanoPagina))
                            
                                const snapPaso= await getDocs(consultaPaso)
                                docPaso= snapPaso.docs[snapPaso.docs.length -1]
                            }
                            documentoAnterior=docPaso
                        }
                        consulta= query(coleccionRef, orderBy(campoOrden, direccionOrden), startAfter(documentoAnterior), limit(tamanoPagina))
                    }//termina el ELSE
                    const snapshot= await getDocs(consulta)
                    const listaProductos= snapshot.docs.map((doc)=>({
                        ...doc.data(),
                        id: doc.id
                    }))
                    setElementos(listaProductos)
                    if (snapshot.docs.length >0){
                        const ultimoDocDeEstaPagina= snapshot.docs[snapshot.docs.length-1]
                        setUltimosDocs((anteriores)=>({
                            ...anteriores,
                            [paginaActual]:ultimoDocDeEstaPagina
                        }))
                    }
                } catch (error) {
                    console.error("Error al traer la pagina:", error)
                } finally {
                    setCargando(false)
                }
            }
            traerProductosDeLaPagina()
        },[db, nombreColeccion, paginaActual, tamanoPagina, campoOrden, direccionOrden, recargarContador])

    const irAPagina= (numeroPagina)=>{
        if (numeroPagina >= 1 && numeroPagina <= totalPaginas){
            setPaginaActual(numeroPagina)
        }
    }

    const paginaSiguiente= ()=> irAPagina(paginaActual+1)
    const paginaAnterior= ()=> irAPagina(paginaActual-1)
    
    return {elementos, setElementos, paginaActual, totalPaginas,
        cargando, irAPagina, paginaSiguiente, paginaAnterior, recargar}
}

export default usePaginacion