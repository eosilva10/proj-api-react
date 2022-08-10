import React, { Component } from 'react';

// IMPORTANDO NOSSO COMPONENTE DA API
import api from './api';

// RETORNAREMOS UM CLASSE DE ESTADO
class App extends Component {
  
  // VAMOS CRIAR UM ESTADO QUE VAI ARMAZENAR OS FILMES
  state = {
    filmes: [],
  }

  // UTILIZANDO O COMPONENT DID MOUNT PARA BUSCAR OS DADOS NA API
  // SERÁ ASINCRONO POIS O COMPONENT VAI SER CHAMADO CASO ALGUMA ATUALIZAÇÃO OCORRER
  async componentDidMount() {
    // PASSANDO A RESPOSTA DA REQUISIÇÃO PARA UMA CONTANTE
    // O VALOR VAZIO VEM APÓS A URL PASSADA NO COMPONENTE API, ENTÃO PODEMOS PESQUISAR VALORES AQUI
    const resp = await api.get('naruto');

    // SETANDO O ESTADO COM OS DADOS DA RESPOSTA DA REQUISIÇÃO
    this.setState({ filmes: resp.data });
  }
  
  render(){

    const { filmes } = this.state;

    return(
      <div>
        <h1> Listar os filmes </h1>

        {/* MAPEANDO A API PARA RETORNAR UMA LISTA DE FILMES */}
        {filmes.map(filme => (
          <li key={filme.show.id}>
            <h2>
              <strong> Titulo: </strong>
              {filme.show.name}
            </h2>  
            <p>
              {filme.show.url}
            </p>  
          </li>
        ))}
      </div>
    );
  }
};

export default App;
