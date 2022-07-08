import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./style.css"
import fotoDocumento from '../../assets/document_foto.png'

export default function ProData () {
    return (
        <Container className='row'>
            <col>
            </col>
            <div id='foto' className='col-4 mx-auto ml-5'>
                <p id='carteira' className='mt-4'>Adicione uma foto de rosto segurando sua carteira profissional <span>*</span></p>
                <img className='mb-3 mb-3' src={fotoDocumento} alt='Foto do perfil'/>
                <Button variant="outline-success" className='btn mb-4'>Tirar foto</Button>{' '} 
                <Button variant="outline-success" className='btn mb-4'>Carregar foto</Button>{' '}
            </div>
            <form className='col-8'>
                <div className="form-row mt-4 mb-4 row">
                    <div className="form-group col-md-6">
                        <label>Profissão:</label>
                        <input type="text" className="form-control"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Especialidade clínica:</label>
                        <input type="text" className="form-control"></input>
                    </div>
                </div>
                <div className="form-group mb-4 mt-3">
                    <label className="mt-2 mb-2">Nº de Insc. do Conselho de Classe:</label>
                    <input type="text" className="form-control" placeholder="123.456.454-98/304958435"></input>
                </div>
                <div className="form-group mb-4 mt-3">
                    <label className="mt-2 mb-2">Carta de Entrada: <span>*</span></label>
                    <textarea rows={4} className="form-control" placeholder="Descreva o porquê você gostaria de atuar no 
atendimento a comunidade LGBTQIAPN+"></textarea>
                </div>
            </form>
        </Container>
    )
}