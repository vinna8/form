import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";


export const withAuthNavigate = (Component) => {
    const NavigateComponent = (props) => {
        
        useEffect(() => {
            const navigate = useNavigate();
            if (!props.isAuth) navigate("/login") 
        }, [props.isAuth])

        return <Component {...props}/> 
    }   

    return connect(mapStateToPropsForNavigate)(NavigateComponent);
}
const mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth
});