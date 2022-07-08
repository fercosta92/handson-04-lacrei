import { Container, Row, Col} from "react-bootstrap"
import './style.css';

function Mensage (){
    return(
        <Container>
            <Row >
                <Col md={{ span: 6, offset: 6 }} className="text">
                 <p>Cadastro realizado com sucesso, estamos verificando o número de sua inscrição 
                    no respectivo Conselho Profissional, em até 24 horas lhe retornaremos por e-mail
                    com o resultado da consulta.</p>
                </Col>
            </Row>
        </Container>               
    )
}
export default Mensage