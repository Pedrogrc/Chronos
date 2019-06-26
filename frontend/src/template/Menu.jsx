import React from 'react'

export default props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <a className="navbar-brand font-weight-bold text-white" href="index.html">SENAI - Horários</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link text-white" href="/horarios">Horários</a>
            <a className="nav-item nav-link text-white" href="/recados">Recados</a>
            <a href="/logout"><i className="fa fa-sign-out"></i> <span className="nav-label">Sair</span> </a>
          </div>
        </div>
    </nav>
    );
}

//<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//          <div class="navbar-nav">
//            <a class="nav-item nav-link text-white" href="index.html">Inicio</a>
//            <a class="nav-item nav-link text-white" href="horario.html">Horários</a>
//            <a class="nav-item nav-link text-white" href="recados.html">Recados</a>
//          </div>

//<div className="sidebar-collapse">
//                <ul className="nav metismenu" id="side-menu">
//                  <li className="active">
//                        <a href="/horarios"><i className="fa fa-check"></i> <span className="nav-label">Horários</span></a>
//                    </li>
//                    <li>
//                        <a href="/recados"><i className="fa fa-address-card"></i> <span className="nav-label">Recados</span> </a>
//                    </li>
//                    <li>
//                        <a href="/logout"><i className="fa fa-sign-out"></i> <span className="nav-label">Sair</span> </a>
//                    </li>
//                </ul>
//            </div>