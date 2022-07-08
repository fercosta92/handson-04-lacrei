import Desk from "../../assets/images/desk.svg"
import { Container} from "react-bootstrap";
import "./styles.css";


const ContainerLeft  = () => {
    return (
        <Container fluid className="cont bkg-img">
             <img src={Desk} className="img-desk" />
        </Container>
    )
}

export default ContainerLeft;

