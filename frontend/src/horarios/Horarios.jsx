import React, { Component } from 'react'

export default class Horarios extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Horário cadastrado! ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-left m-t-lg"><h1> Horários </h1></div>

                        <br />
                        <form onSubmit={this.handleSubmit}>

                            <label>
                                Evento:
                            <br />
                            <input type="text" onChange={this.handleChange} />
                            </label>

                            <br />
                            <label>
                                Data:
                            <br />
                            <input type="date" onChange={this.handleChange} />
                            </label>

                            <br />
                            <label>
                                Responsável:
                            <br />
                            <input type="text" onChange={this.handleChange} />
                            </label>

                            <br />
                            <label>
                                Unidade:
                                    <br />
                                    <select onChange={this.handleChange}>
                                    <option value="saojose">São José</option>
                                    <option value="florianopolis">Florianópolis</option>
                                    <option value="palhoca">Palhoça</option>
                                </select>
                            </label>

                            <br />
                            <label>
                                Curso:
                            <br />
                            <input type="text" onChange={this.handleChange} />
                            </label>

                            <br />
                            <label>
                                Sala:
                                <br />
                            <input type="number" onChange={this.handleChange} />
                            </label>

                            <br />
                            <label>
                                Turno:
                                    <br />
                                    <select onChange={this.handleChange}>
                                    <option value="matutino">Matutino</option>
                                    <option value="vespertino">Vespertino</option>
                                    <option value="noturno">Noturno</option>
                                </select>
                            </label>

                            <div className="form-group">
                                <label for="exampleFormControlFile1">Excel (opcional)</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>

                            <br />
                            <input type="submit" className="btn btn-primary" value="Cadastrar" />

                            <br />
                            <input type="list" className="btn btn-primary" value="Gerenciar" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}