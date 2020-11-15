import React from 'react';
import './App.css';
import Busca from './Components/Busca.jsx';
import Resultado from './Components/Resultado.jsx';
import SimpleMap from './Components/Map.jsx';




// const json = {
//   "_embedded": {
//     "local": [
//       {
//         "id": "1",
//         "latitude": "-15.8244718",
//         "longitude": "-47.8289482",
//         "observacao": "Ponte JK",
//         "dt_cadastro": "14/11/2020 15:59:27",
//         "dt_alteracao": null
//       },
//       {
//         "id": "2",
//         "latitude": "-15.7983361",
//         "longitude": "-47.8095589",
//         "observacao": "Ermida Dom Bosco",
//         "dt_cadastro": "14/11/2020 15:59:27",
//         "dt_alteracao": null
//       },
      
//     ]
//   }
// }

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      busca: '',
      latitude: -15.7983515,
      longitude: -47.8755469,
      observacao: '',
      locais: [],
      key: 555,
      json: []
    };
  }
  
  getJson = () => {
    const targetUrl = 'http://localhost:8080/food-map/local'
    console.log('outsidefetch')
    fetch(targetUrl, {
  headers: new Headers({
    "Authorization": 'Basic bGF6YXJvOnRlc3Rl'
  }),
})
    .then(response => response.json())
    .then(locais => this.setState({ json: locais })).catch(err => console.log(err))
  }

  showMap = (value) => {
    console.log(value.latitude)
    this.setState({latitude: value.latitude, longitude: value.longitude, observacao: value.observacao})
    console.log(this.state)
    this.setState({ key: Math.floor(Math.random() * 100 + 1)})
    console.log(this.state.key)
    //this.forceUpdate()
  }


  Mudança = (event) => {
    console.log('json',this.state.json)
    console.log(event.target.value)
    this.setState({busca: event.target.value})
    this.setState({locais: []})
    const nJson = this.state.json._embedded.local
    const arr = []
    nJson.forEach((item, i) => {
      const minusculo = item.observacao.toLowerCase()
      if (minusculo.includes(event.target.value.toLowerCase())) {
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

  componentDidUpdate(prevProps) {
    console.log('updated')
  }

  render() {
    this.getJson()
    return (
      <React.Fragment>
        <div className='text-center'>
          <SimpleMap key={this.state.key} lati={this.state.latitude} longi={this.state.longitude} obse={this.state.observacao} />
          <Busca quandoMudar={this.Mudança} submit={this.Buscar} />
          <Resultado locais={this.state.locais} showMap={this.showMap} loca={this.state} />
        </div>
      </React.Fragment>
    )
  }




}

export default App;
