import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "./style.css"

export default function RegisterCard() {
    return(
        <div id="Container" className="container .col-sm- row align-items-center">
            <h1 className='mb-5 h1 text-center'>Criar conta</h1>
            <h3 className='mb-5 h3 text-center'>Você mora no estado de São Paulo?</h3>
            <div className="btn-group-vertical col-md-9 mx-auto">
                <Button variant="outline-success" className='btn mb-3'>Sim, moro em São Paulo</Button>{' '}
                <Button variant="outline-success" className='btn mb-3'>Não, moro em outro estado</Button>{' '}
            </div>
        </div>
    )
}
