//import React from "react";

export function FormularioProducto({datosForm,manejarCambio,manejarEnvio,manejarCambioImagen,loading}){
    return (
        <form className="formAlta" onSubmit={manejarEnvio}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Nombre del Producto:</label>
                <input name="nombre" type="text" placeholder="Ej: Teclado Mecánico"
                value={datosForm.nombre}
                onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Categoría:</label>
                <select name="categoria"
                value={datosForm.categoria|| ""}
                onChange={manejarCambio}
                >
                <option value="" disabled>Selecciona categoría</option>
                <option value="tecnologia">Tecnología</option>
                <option value="hogar">Hogar</option>
                <option value="moda">Moda</option>
                </select>
            </div>
            <div>
                <label>Precio:</label>
                <input name="precio" type="number" placeholder="Ej: 95" 
                value={datosForm.precio}
                onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock:</label>
                <input name= "stock" type="number" placeholder="Ej: 5"
                value={datosForm.stock}
                onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Imagen:</label>
                <input name="urlImagen" type="file" placeholder="https://…"
                value={datosForm.imagen}
                onChange={manejarCambioImagen}
                />
            </div>
            {loading ? <div> Cargando...</div> : <button className="btnForm" type="submit"> Guardar Producto</button>}
        </form>
    )
}