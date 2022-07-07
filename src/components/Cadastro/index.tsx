import './style.css';



function Cadastro() {
    return (
                    <form className="criarConta">
                        <h1 className='title-register'>Criar conta</h1>
                        <label for="fname">Nome completo<span className="cor"> *</span></label><br></br>
                        <input type="text" className="formStyle" id="fname" name="nome" placeholder=" Digite seu nome"></input>
                        <br></br>
                        <label for="lname">E-mail<span className="cor"> *</span></label>
                        <br></br>
                        <input type="text" className="formStyle" id="lname" name="email" placeholder=" Digite se e-mail"></input>
                        <br></br>
                        <label for="country">Prefixo do conselho profissional<span className="cor"> *</span></label>
                        <br></br>
                        <select id="country" className="formStyle1" name="country">
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
                        <input type="text" className="formStyle" id="fname" name="nome" placeholder=" Digite seu registro"></input>
                        <br></br>
                        <div className="divForm1">
                            <div className="divForm2">
                                <label for="lname">Senha<span className="cor"> *</span></label>
                                <br></br>
                                <input type="password" class="formStyle2" id="pwd" name="pwd" placeholder=" Digite sua senha"></input>
                            </div>
                            <div className="divForm2">
                                <label for="lname">Confirmar a senha<span className="cor"> *</span></label>
                                <br></br>
                                <input type="password" class="formStyle2" id="pwd" name="pwd" placeholder=" Digite novamente a senha" ></input>
                                <br></br>
                            </div>

                        </div>

                        <div className="termos">
                            <input type="checkbox" className="termos1"></input>
                            <label >  Eu li e concordo com os<a href="#"> Termos de uso e Politica e Privacidade</a></label>
                            <br></br>
                        </div>
                        <br></br>
                        <button className="botao">Criar</button>
                    </form>
    );
}

export default Cadastro;
