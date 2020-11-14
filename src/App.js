import React from 'react';
import './App.css';
import Busca from './Components/Busca';
import Resultado from './Components/Resultado';


const json = {
  "_embedded": {
      "local": [
          {
              "id": "1",
              "latitude": "-15.8244718",
              "longitude": "-47.8289482",
              "observacao": "Ponte JK",
              "dt_cadastro": "14/11/2020 15:59:27",
              "dt_alteracao": null
          },
          {
              "id": "2",
              "latitude": "-15.7983361",
              "longitude": "-47.8095589",
              "observacao": "Ermida Dom Bosco",
              "dt_cadastro": "14/11/2020 15:59:27",
              "dt_alteracao": null
          },

      ]
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      busca: '',
      latitude: '',
      longitude: '',
      locais: []
    };
  }



  Mudança = (event) => {
    console.log(event.target.value)
    this.setState({busca: event.target.value})
  }

  Buscar = () => {
    this.setState({locais: []})
    const nJson = json._embedded.local
    const arr = []
    nJson.forEach((item, i) => {
      const minusculo = item.observacao.toLowerCase()
      if (minusculo.includes(this.state.busca.toLowerCase())) {
        arr.push({
          observacao: item.observacao,
          latitude: item.latitude,
          longitude: item.longitude
        })
      }
      this.setState({locais: arr})
    })
    console.log(this.state.locais)
  }

  render() {
    return (
      <React.Fragment>
        <Busca quandoMudar={this.Mudança} submit={this.Buscar}/>
        <Resultado locais={this.state.locais}/>
      </React.Fragment>
    )
  }




}

export default App;
