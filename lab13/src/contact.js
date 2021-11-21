import React from 'react';
import { useParams } from "react-router-dom";



const Contact = () =>{
    let params = useParams();
    return (
    <div>
        <h1>Contacto</h1>
        <p>{params.id}</p>
    </div>)

}

export default Contact;