/* console.log("Enviando los siguientes datos a Firebase,", productoCompleto)
                
                    const productsCollection=collection(db, "productos nacionales")
                await addDoc(productsCollection, productoCompleto)
                console.log(productoCompleto)
                alert("Producto agregado", productoCompleto) */


//manejar envio anterior ABAJO

/* const manejarEnvio= async(evento)=>{
        setLoading(true)
        console.log("loading:",loading)
        evento.preventDefault()
        if (!imagenFile){
            alert("Por favor, selecciona una imagen para el producto")
            return
        }
        const apiKey= import.meta.env.VITE_API_KEY
        const formData= new FormData()
        formData.append("image",imagenFile)
        try{
            console.log("Subiendo imagen a Imgbb...")
            const respuestaImgbb= await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`,{
                method: "POST",
                body: formData,
            })
            const datosImgbb= await respuestaImgbb.json()
            if (datosImgbb.success){
                console.log("Imagen subida a Imgbb exitosamente", datosImgbb.data.url)
                const productoCompleto= {
                    ...datosForm,
                    imagenUrl: datosImgbb.data.url
                }
                console.log("Enviando los siguientes datos a Firebase,", productoCompleto)
                //const db= getFirestore()
                const productsCollection=collection(db, "productos nacionales")
                await addDoc(productsCollection, productoCompleto)
                console.log(productoCompleto)
                alert("Producto agregado", productoCompleto)
            }
            else{
            throw new Error('La subida de la imagen a Imgbb falló.');
            }
        }
        catch (error){
            console.error("Error en el proceso de envío:", error);
            alert("Error al subir la imagen. Por favor, intentá de nuevo.");
            }
        finally{
            setLoading(false)
        }  
        }
 */
/* 
        <table>
            <thead>
                <tr>
                    <th>Foto</th>
                    <th>Item</th>
                    <th>P.Unitario</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {carrito.map(item=>{
                    <CarritoItem key= {item.id} {...item} />
                })}
            </tbody>
        </table>
 */


/*
const subirImagenImgbb = async (file) => {
    const apiKey = "4bc89d90e5ba2ca799b0f1339650ce18";
    const formData = new FormData();
    formData.append("image", file);

    const respuesta = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formData,
    });

    const datos = await respuesta.json();
    if (!datos.success) throw new Error("Error al subir la imagen");
    return datos.data.url;
  };
*/