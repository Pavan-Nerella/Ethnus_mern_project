import React from 'react'
import { Navigate } from 'react-router-dom'

function PublicDocRoute({children}) {
    if(localStorage.getItem("token")){
        return <Navigate to="/docHome" />
    }else{
        return children;
    }
}

export default PublicDocRoute
