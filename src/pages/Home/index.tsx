import Desk from "../../assets/images/desk.svg"
import { Container, Col, Row } from "react-bootstrap";
import "./styles.css";
import CardOpen from "../../components/CardOpen";
import RegisterCard from "../../components/RegisterCard";


function Home() {
    return (
        <Container fluid className="container-home gap-5">
            <Row>
                <Col sx={6} className="d-flex justify-content-center align-items-center">
                    <RegisterCard />
                </Col>
                <Col sx={6} className="p-0">
                    <CardOpen />
                    <img src={Desk} className="img-desk-home" />
                </Col>
            </Row>
        </Container>
    )
}
export default Home;