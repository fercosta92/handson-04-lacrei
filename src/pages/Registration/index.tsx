import Cadastro from "../../components/Cadastro";
import Desk from "../../assets/images/desk.svg"

import "./styles.css";


function Registration() {
    return (
        <div className="container-registration container-fluid">
            <div className="row gy-5">
                <div className="col-6">
                    <img src={Desk} className="img-desk-registration" />
                </div>
                <div  className="col-6 p-0 justify-content-center">
                    <Cadastro />
                </div>
            </div>
        </div>
    )
}
export default Registration;