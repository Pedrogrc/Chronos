import React, { Component } from 'react'
import api from '../services/api'

export default class Horarios extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listaHorarios : []
         }
    }

    componentDidMount() {
        api.get('/horarios')
            .then( response => {

                console.log(response.data)
                this.setState({ listaHorarios: response.data });
            })
            .catch(erro => {
                if (erro.response.status === 403) {
                    this.props.history.push("/");    
                }
            })

    }

    render() { 
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="ibox ">
                            <div className="ibox-content">
                                <h2>Horários</h2>
                                <small>1 pendentes 5 concluídas</small>
                                <ul className="todo-list m-t small-list ui-sortable">
                                    {this.state.listaHorarios.map( horarios => 
                                        <li key={horarios.id}>
                                            <a href="#a" className="check-link"><i className={`fa ${horarios.concluida ? 'fa-check-square-o' : 'fa-square-o' }`}></i> </a>
                                            <span className={`m-l-xs ${horarios.concluida ? 'todo-completed' : '' }`}> {horarios.descricao} </span>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
