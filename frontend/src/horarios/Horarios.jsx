import React, { Component } from 'react'
import api from '../services/api'

export default class Horarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaHorarios: []
        }
    }


    componentDidMount() {
        api.get('/horarios')
            .then(response => {

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
                    <div className="col-lg-12">
                        <div className="text-left m-t-lg"><h1> Horários </h1></div>

                        <div>
                            <p></p>
                        </div>

                        <form className="col-lg-12">
                            <div className="form-group">
                                <label for="titulo">Título</label>
                                <input type="text" className="form-control" id="titulo" placeholder="Insira o título" />
                            </div>

                            <div>
                                <p></p>
                            </div>

                            <div className="form-group">
                                <label for="DATA">Data: </label>
                                <input id="datepicker" width="276" />
                            </div>

                            <label for="inputState">Unidade</label>
                            <select id="inputState" className="form-control">
                                <option selected>Selecione...</option>
                                <option>Palhoça</option>
                                <option>São José</option>
                                <option>Florianópolis</option>
                            </select>

                            <div>
                                <p></p>
                            </div>

                            <div className="form-group">
                                <label for="SALA">Sala: </label>
                                <input type="number" required="required" className="form-control numbers" />
                            </div>

                            <div>
                                <p></p>
                            </div>

                            <label for="inputState">Turno</label >
                            <select id="inputState" className="form-control">
                                <option selected>Selecione...</option>
                                <option>Matutino</option>
                                <option>Vespertino</option>
                                <option>Noturno</option>
                            </select>

                            <div>
                                <p></p>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlFile1">Excel</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>

                            <a href="/"><button type="button" className="btn btn-primary" >Cadastrar</button></a>

                            <a href="/horarios/Lista_horarios.jsx"><button type="button" className="btn btn-primary bottom" >Listar horários</button></a>



                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

