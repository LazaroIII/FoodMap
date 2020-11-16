import React from 'react';
import './App.css';
import Busca from './Components/Busca.jsx';
import Resultado from './Components/Resultado.jsx';
import SimpleMap from './Components/Map.jsx';



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
    fetch(targetUrl, {
      headers: new Headers({
        "Authorization": 'Basic dGVzdGU6dGVzdGU='
      }),
    })
    .then(response => response.json())
    .then(locais => this.setState({ json: locais }))
  }

  showMap = (value) => {
    this.setState({latitude: value.latitude, longitude: value.longitude, observacao: value.observacao})
    this.setState({ key: Math.floor(Math.random() * 100 + 1)})
  }


  Mudança = (event) => {
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

  }

  render() {
    if (this.state.json.length === 0) {
      this.getJson()
      
      return(
        <React.Fragment>
          <SimpleMap key={this.state.key} lati={this.state.latitude} longi={this.state.longitude} obse={this.state.observacao} />
          <h3 className='text-center'>Loading...</h3>
        </React.Fragment>
      )
    }else {
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
  // componentDidMount() {
  //   this.getJson()
  // }



}

export default App;
