import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "./style.css"


export default function RegisterCard() {
    return (
        <div id="Container" className="container .col-sm- row align-items-center">
            <h1 className=' h1 text-center'>Criar conta</h1>
            <h3 className=' h3 text-center'>Você mora no estado de São Paulo?</h3>
            <div className="btn-group-vertical col-md-9 mx-auto">
                 <Link to="/Hands-on-04-Lacrei-/registration" >   <Button variant="outline-success" className='btn mb-3 btn-card-register'>Sim, moro em São Paulo</Button> </Link>
                 <Link to="/Hands-on-04-Lacrei-/waitlist" ><Button variant="outline-success" className='btn mb-3 btn-card-register'>Não, moro em outro estado</Button></Link>
            </div>
        </div>
    )
}

