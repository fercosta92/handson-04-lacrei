import { Container, Row, Col, Button } from "react-bootstrap"
import Brazuca from "../../assets/image/Brazuca.png"
import './style.css';

function Login (){
    return(
        <Container>
            <Row>
                <Col xs={6}>
                <div className="user-login">
                    <h1 className="user-login__title">Entrar na Conta</h1>
                    <span>Digite seus dados abaixo:</span>
                        <form autoComplete="nope">
                            <div className="user-login__form-control">
                            <label htmlFor="email"></label>
                            <input id="email" placeholder="Digite seu ID Lacrei"  autoComplete="off" />
                            </div>
                            <div className="user-login__form-control">
                            <label htmlFor="password"></label>
                            <input id="password"  placeholder="Digite sua senha" type="password" name="password" />
                            </div>
                            <Button className="user-btn" variant="outline-dark">Entrar</Button>                       
                        </form>
                        <div className="user-btn-link">
                         <a href="">Esqueceu sua senha? Clique aqui.</a>
                        </div>
                    </div>
                </Col>
                <Col xs={6} className="user-create">
                    <div className="user-create-div">                
                    <h2>Não possui uma conta na Lacrei?</h2>
                    <p>Crie sua conta agora mesmo para começar a contribuir.</p>
                    <Button className="user-create-btn" variant="outline-dark">Criar Conta</Button> 
                    <img src={Brazuca }/>                
                    </div>
                </Col>
            </Row>
        </Container>
        
        
    )
}
export default Login