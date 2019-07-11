import React from 'react'

export default props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <a className="navbar-brand font-weight-bold text-white" href="/">SENAI - Horários</a>
        
        
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="nav metismenu">
            <li className="active">
              <a href="/horarios"><i className="fa fa-clock-o"></i> <span>Horários</span></a>
            </li>
            <li className="active">
              <a href="/recados"><i className="fa fa-address-card"></i> <span>Recados</span></a>
            </li>
            <li className="active">
              <a href="/ajuda"><i className="fa fa-question-circle"></i> <span>Ajuda</span></a>
            </li>
            <li className="active">
              <a href="/logout"><i className="fa fa-sign-out"></i> <span>Sair</span></a>
            </li>
          </ul>
        </div>

    </nav>
    );
}