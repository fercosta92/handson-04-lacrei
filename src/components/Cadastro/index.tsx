import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function Cadastro() {
    return (
        <div className="criar-conta">
            <div >
                <h1 className='title-register'>Criar conta</h1>
                <label for="fname">Nome completo<span className="color-register"> *</span></label><br></br>
                <input type="text" className="form-register" id="fname" name="nome" placeholder=" Digite seu nome"></input>
                <br></br>
                <label for="lname">E-mail<span className="color-register"> *</span></label>
                <br></br>
                <input type="text" className="form-register" id="lname" name="email" placeholder=" Digite se e-mail"></input>
                <br></br>
                <label for="country">Prefixo do conselho profissional<span className="color-register"> *</span></label>
                <br></br>
                <select id="country" className="form-register-select" name="country">
                    <option value="australia">selecione</option>
                    <option value="canada">Enfermagem</option>
                    <option value="usa">Nutrição</option>
                    <option value="usa">Medicina</option>
                    <option value="usa">Psicologia</option>
                    <option value="usa">Odontologia</option>
                    <option value="usa">Fonoaudiologia</option>
                    <option value="usa">Fisioterapia</option>
                    <option value="usa">Outros</option>
                </select>
                <br></br>
                <label for="fname">Nome do registro<span className="cor"> *</span></label><br></br>
                <input type="text" className="form-register" id="fname" name="nome" placeholder=" Digite seu registro"></input>
                <br></br>
                <div className="wrapper-register">
                    <div className="wrapper-register-inp">
                        <label for="lname">Senha<span className="cor"> *</span></label>
                        <br></br>
                        <input type="password" className="form-register-inp" id="pwd" name="pwd" placeholder=" Digite sua senha"></input>
                    </div>
                    <div className="wrapper-register-inp">
                        <label for="lname">Confirmar a senha<span className="cor"> *</span></label>
                        <br></br>
                        <input type="password" className="form-register-inp" id="pwd" name="pwd" placeholder=" Digite novamente a senha" ></input>
                        <br></br>
                    </div>
                </div>
                <div className="term-register">
                    <input type="checkbox" className="term-register-inp"></input>
                    <label >  Eu li e concordo com os<a href="#"> Termos de uso e Politica e Privacidade</a></label>
                    <br></br>
                </div>
                <br></br>
                <Link to="/Hands-on-04-Lacrei-/registrationsucess"><button className="btn-register">Criar</button></Link>
        </div>
                    </div >
    );
}

export default Cadastro;
