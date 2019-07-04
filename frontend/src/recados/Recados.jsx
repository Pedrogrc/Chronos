import React, { Component } from 'react'

export default class Recados extends Component {

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-left m-t-lg"><h1> Recados </h1></div>

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

                            <div className="row col-lg-12">
                                <label for="DATA">Data de Inicio: </label>
                                <input id="datepicker" width="276" />

                                <label for="DATA">Data de Fim: </label>
                                <input id="datepicker" width="276" />
                            </div>

                            <div>
                                <p></p>
                            </div>

                            <div className="row col-lg-12">
                                <label for="DATA">Hora de Inicio: </label>
                                <input id="datepicker" width="276" />

                                <label for="DATA">Hora de Fim: </label>
                                <input id="datepicker" width="276" />
                            </div>

                            <div>
                                <p></p>
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
                                <label for="exampleFormControlTextarea1">Descrição</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div>
                                <p></p>
                            </div>



                            {/*
                                <div className="form-group col-xs-12 col-md-12 col-lg-12">
                                    <label>Turno: </label>
                                    <div className="btn-group" data-toggle="buttons" style="width: 100%;">
                                        <label className="btn btn-info" style="width: 33.33%;">
                                            <input type="radio" name="radio_modalidade" value="matutino" autocomplete="off" /> Matutino </label>
                                        <label className="btn btn-danger" style="width: 33.33%;">
                                            <input type="radio" name="radio_modalidade" value="vespertino" autocomplete="off" /> Vespertino </label>
                                        <label className="btn btn-dark" style="width: 33.33%;">
                                            <input type="radio" name="radio_modalidade" value="noturno" autocomplete="off" />Noturno</label>
                                    </div>
                                </div>
                                */}

                            <a href="lista_horario.html"><button type="button" className="btn btn-primary" >Cadastrar</button></a>



                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

