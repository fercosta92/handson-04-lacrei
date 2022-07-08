import React from "react";
import Desk from "../../assets/images/desk.svg"
import "./styles.css";
import WaitingListForm from "../../components/ListaEspera";


function ListaEspera() {
    return (
        <div className=" container-waiting container-waiting-flex">
            <img src={Desk} className="img-desk-waiting" />
            <WaitingListForm />
        </div>
    )
}
export default ListaEspera;