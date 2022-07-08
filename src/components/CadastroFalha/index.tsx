import { Container, Row, Col } from "react-bootstrap"
import './styles.css';
import Animation from "../../assets/images/animation.png"

function Alert() {
    return (

        <div className="Ops">
            <img src={Animation} />
            <h2>Não encontrou sua profissão?</h2>
            <p>Não se preocupe. Em breve poderá contribuir para nossa causa e poderemos trabalhar juntes ❤️</p>
        </div>
    )
}
export default Alert;