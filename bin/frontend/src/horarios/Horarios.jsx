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
                    <div className="col-lg-12">
                        <div className="text-center m-t-lg">
                            <h1> Horários </h1>
                            
                            <div className="col-lg-6"></div>
                                <a href="/"><button className="btn btn-primary btn-lg">Listar horários</button></a>
                                
                                <a href="/"><button type="button" className="btn btn-success btn-lg" >Cadastrar novo horário</button></a>
                                
                        </div>

                        <form>
                            <div className="form-group col-lg-12">
                                <label for="exampleFormControlInput1">Título</label>
                                <input type="email" class="form-control" id="titulo" placeholder="Insira o título"/>
                            </div>

                            
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
