import { Container, Row, Col, Button } from "react-bootstrap"
import './style.css';

function Painel (){
    return(
        <Container>
            <Row >
                <Col md={{ span: 6, offset: 6 }} className="Entre">
                 <h1>Já é uma pessoa profissional de saúde credenciada?</h1>
                 <p>Entre com o seu Lacrei ID para continuar contribuindo.</p>
                 <Button className="bnt" variant="outline-dark">Entrar</Button>
                </Col>               
            </Row>
        </Container>               
    )
}
export default Painel