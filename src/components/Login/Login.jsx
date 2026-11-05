import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { Link } from "react-router-dom"

const Login=() => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const navigate= useNavigate()
    const handleLogin= (e)=>{
        e.preventDefault()
        const auth= getAuth()
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                const user=userCredential.user
                console.log("usuario logueado:", user)
                alert("login exitoso!")
                navigate("/")
            })
            .catch((error)=>{
                const errorCode= error.code
                const errorMessage= error.message
                console.error("Error en el login:",errorCode,errorMessage)
                alert("Error: "+ errorMessage)
            })
    }

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin} action="">
                <input type="email"
                placeholder="Correo electronico"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input type="password"
                placeholder="Constraseña"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button type="submit" >Ingresar</button>
            </form>
            <p>¿No tenés una cuenta? <Link to="/registro">Registrate aquí</Link></p>
        </div>
    )
}
export default Login

/*
<input
type="password"
placeholder="Contraseña"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button type="submit">Ingresar</button>
</form>
</div>
);
};
export default Login;
/>
*/