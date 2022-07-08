import Desk from "../../assets/images/desk.svg"
import { Container, Col, Row } from "react-bootstrap";
import "./styles.css";
import Alert from "../../components/CadastroFalha";


function RegistrationFail() {
    return (
        <Container fluid className="container-fail gap-5">
            <Row>
                <Col sx={6}>
                    <Alert />
                </Col>
                <Col sx={6} className="p-0">
                </Col>
            </Row>
        </Container>
    )
}
export default RegistrationFail;