import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./style.css"
import fotoDePerfil from '../../assets/perfil_foto.png'

export default function PersonalData () {
    return (
        <Container className='row mb-3'>
            <col>
            </col>
            <div id='foto' className='col-4 mx-auto ml-5'>
                <p className='mt-4'>Adicione uma foto de perfil</p>
                <img className='mb-3 mb-3' src={fotoDePerfil} alt='Foto do perfil'/>
                <Button variant="outline-success" className='btn mb-4'>Tirar foto</Button>{' '} 
                <Button variant="outline-success" className='btn mb-4'>Carregar foto</Button>{' '}
            </div>
            <div id='descricao' className='col-7'>
                <label className='mt-5'>Descreva sua foto:</label>
                <textarea rows="4"></textarea>
                <label className='mt-5'>Sobre mim:</label>
                <textarea rows="4"></textarea>
            </div>
            <col>
            </col>
        </Container>
    )
}