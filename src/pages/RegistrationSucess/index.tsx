import Mensage from "../../components/CadastroSucesso";
import Desk from "../../assets/images/desk.svg"
import { Container, Col, Row } from "react-bootstrap";
import "./styles.css";


function RegistrationSucess() {
    return (
        <Container fluid className="container-sucess bkg-img gap-5">
            <Row>
                <Col sx={6}>
                </Col>
                <Col sx={6} className="p-0">
                    <Mensage />
                </Col>
            </Row>
        </Container>
    )
}
export default RegistrationSucess;