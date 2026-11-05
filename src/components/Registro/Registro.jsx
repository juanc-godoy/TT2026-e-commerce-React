import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const Registro=()=>{
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [error, setError]= useState(null)
    const navigate= useNavigate()
    const auth= getAuth()

    const handleSubmit= async (e)=>{
        e.preventDefault()
        setError(null)
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            navigate("/")
        }
        catch(error){
            if (error.code==="auth/email-already-in-use"){
                const quiereLoguearse=window.confirm(
                    "Este email ya está registrado. ¿Desea iniciar sesión?")
                if (quiereLoguearse){
                    navigate("/login")
                }else{
                    navigate("/")
                }
            }else{
                setError("Error al registrar el usuario. Verifique los datos e intente nuevamente")
                console.error("Error en el registro:",error.message)
            }
        }
    }

    return (
        <div className="formRegistro">
            <h2>Crear Nueva Cuenta</h2>
            <form onSubmit={handleSubmit}>
                <div className="formGroup">
                    <label> Correo Electrónico</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />
                </div>
                <div className="formGroup">
                    <label> Password</label>
                    <input
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    placeholder="Mínimo 6 caracteres"
                    />
                </div>
                {error && <p className="errorMessage">{error}</p>}
                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default Registro

/*

*/