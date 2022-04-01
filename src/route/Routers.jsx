import React from "react";
import Form from '../components/Form';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Profile from "../components/Profile";

const Routers = () => {
    return (
        <Routes>
            <Route path='/login' element={<Form />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/' element={<Form />}/>
        </Routes>
    );
}

export default Routers;