import './styles.css'

function WaitingListForm() {
    return (
        <div className="WaitingList">
            <div className='container-waiting-text'>
                <p className='title-waiting'>Poxa que pena!</p>
                <p className="text-waiting">
                    Adorariamos contar com a sua contribuição, porém no momento estamos atuando somente no estado de São Paulo.
                </p>
                <p  className="text-waiting">
                    Mas não se preocupe, estamos em constante expansão e em breve a Lacrei estará disponível no estado em que você reside!
                </p>
            </div>
            <form className='form-waiting-list' >
                <p className='text-waiting-list'>Participe da nossa lista de espera!</p>
                <div className="form-group">
                    <label className='describe-waiting' for="InputEmail">E-mail *</label>
                    <input type="email" className="form-waiting" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu E-mail" />
                </div>
                <div className="form-group">
                    <label className='describe-waiting' for="InputProfissao">Profissão *</label>
                    <input type="email" className="form-waiting" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite sua profissão" />
                </div>
                <button type="submit" className="btn-waiting">Participar</button>
            </form>
        </div>
    )
}
export default WaitingListForm