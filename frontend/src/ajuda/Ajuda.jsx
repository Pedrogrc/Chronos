import React, { Component } from 'react'
import login from './img/login.PNG'
import cad_horario from './img/cad_horario.PNG'
import horarios from './img/horarios.PNG'
import recados from './img/recados.PNG'

export default class Ajuda extends Component {

    render() {
        return (
        <div className="wrapper wrapper-content animated fadeInRight">
            <div className="row">
                <div className="col-lg-12">
                    <div className="text-left m-t-lg"><h1> Ajuda </h1></div>

                    <div>
                        <p>

                        </p>
                    </div>

                    <h3> CHRONOS - Tutorial </h3>

                    <p>
                        Este é um sistema de controle de horários e recados do SENAI de São José. Através dele é possível
                        visualizar as reservas das salas e auditórios, bem como identificar os professores e as unidades
                        curriculares, que estão agendadas para cada ambiente. A função de recados serve para divulgar notícias aos
                        estudantes, através da tela de consulta na TV, conforme cada período de aula.
                    </p>

                    <p>A seguir são disponibilizadas as principais funções e os passos para utilização do Sistema CHRONOS:</p>


                    <div className="container">

                        <p className="font-weight-bold text-uppercase"> 1) Acesso ao sistema: </p>
                        <p>Para acessar o sistema CHRONOS é necessário efetuar o login na página principal, sendo necessário:</p>
                        <div className="container">
                            <p className="font-weight-bold">Informar o usuário cadastrado;</p>
                            <p className="font-weight-bold">Informar a senha cadastrada.</p>
                        </div>
                        <p>
                            Se os dados do login forem informados corretamente, o sistema abrirá a próxima tela, para visualização
                            da
                            listagem de horários que já estão cadastrados.
                        </p>
                        <img src={login} alt="login" className="rounded mx-auto d-block" height="540" width="1080"/>

                        <p> Se houver necessidade de fechar o sistema (efetuar Logoff), é só clicar no botão sair, na parte
                                superior da tela. </p>
                    </div>


                    <div className="container">

                        <p className="font-weight-bold text-uppercase">2) Visualização dos horários cadastrados:</p>
                        <p>Para visualizar os horários já cadastrados no sistema CHRONOS é necessário efetuar o login na página
                        principal, e o sistema já abrirá logo em seguida, a página com a informação desejada dos horários.</p>
                        <img src={horarios} alt="horarios" className="rounded mx-auto d-block" height="540" width="1080"/>

                        <p> Se houver necessidade de excluir um horário cadastrado, basta buscar o item na listagem de horários, e
                        clicar no botão ‘excluir’.</p>
                    </div>


                    <div className="container">

                        <p className="font-weight-bold text-uppercase"> 3) Cadastro de um horário: </p>
                        <p>Para cadastrar um horário no sistema CHRONOS é necessário efetuar o login na página principal, e logo em
                            seguida o sistema abrirá a página com a listagem dos horários já cadastrados. Nesta interface existe um
                            botão chamado "Cadastrar Horário" a ser utilizado para o cadastro desejado, sendo necessário:</p>
                        <div className="container">
                            <p className="font-weight-bold">Clicar no botão “Cadastrar Horário”;</p>
                            <p className="font-weight-bold">Preencher os campos para o cadastro do evento;</p>
                            <p className="font-weight-bold">Cadastrar/Salvar a operação.</p>
                        </div>
                        <img src={cad_horario} alt="cad_horario" className="rounded mx-auto d-block" height="540" width="1080"/>

                        <p>Se houver necessidade de excluir um horário cadastrado, basta buscar o item na listagem de horários, e
                        clicar no botão ‘excluir’.</p>
                    </div >


                    <div className="container">

                        <p className="font-weight-bold text-uppercase"> 3) Cadastro de um recado: </p>
                        <p>Para cadastrar um recado no sistema CHRONOS é necessário efetuar o login na página principal, e logo em
                            seguida o sistema abrirá a página com a listagem dos horários já cadastrados. Nesta interface existe um
                            botão chamado “Cadastrar Recado’’ a ser utilizado para o cadastro desejado, sendo necessário:</p>
                        <div className="container">
                            <p className="font-weight-bold">Clicar no botão “Cadastrar Recado”;</p>
                            <p className="font-weight-bold">Preencher os campos para o cadastro do recado;</p>
                            <p className="font-weight-bold">Cadastrar/Salvar a operação.</p>
                        </div>
                        <img src={recados} alt="recado" className="rounded mx-auto d-block" height="540" width="1080"/>

                    </div >
                </div >
            </div >
        </div >
        );
    }
}