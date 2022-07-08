import { Container, Row, Col} from "react-bootstrap"
import './style.css';
import Animation from "../../assets/image/animation.png"

function Alert (){
    return(
        <Container>
            <Row >
                <Col  xs={6} className="Ops">
                 <img src={Animation }/>   
                 <h2>Não encontrou sua profissão?</h2>   
                 <p>Não se preocupe. Em breve poderá contribuir para nossa causa e poderemos trabalhar juntes ❤️</p>
                </Col>
            </Row>
        </Container>               
    )
}
export default Alert