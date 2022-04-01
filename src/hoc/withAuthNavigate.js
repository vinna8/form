import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import * as selectors from "../redux/selectors";

export const withAuthNavigate = (Component) => {
    const NavigateComponent = (props) => {
        const navigate = useNavigate();
        const isAuth = useSelector(selectors.isAuth); 
        
        useEffect(() => {
            if (!isAuth) navigate("/login") 
        }, [isAuth])

        return <Component {...props}/> 
    }   

    return (NavigateComponent);
}
