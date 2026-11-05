import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../Context/AuthContext"

const ProtectedRoute= ({rolesPermitidos,children})=>{
    const {user, loading}= useAuth()
    
    if (loading) {
        return <div> Cargando...</div>
    }
    if (!user || (rolesPermitidos && !rolesPermitidos.includes(user.rol))) {
        return <Navigate to="/login"/>
    }
    return <>{children}</>
}

export default ProtectedRoute

/*

*/