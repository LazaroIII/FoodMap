import React from 'react';
import Li from './Li.jsx';
import SimpleMap from './Map.jsx'



const Resultado = ({ locais, showMap, loca }) => {
    let lat = loca.latitude;
    let long = loca.longitude;
    let obs = loca.observacao;
    console.log('als',loca.latitude)
    console.log('result',lat, long, obs)

    //const cardsArray = robots.map((user, i) => <Card key={i} id={robots[i]}/>);
        //debugger
        return (
            
            <div>
                <ul id="ToDoList" class="list-group">
                    {locais.map((local, i) => <Li id={i} local={local} click={showMap}/>)}
                </ul>
            </div>
        )
}

export default Resultado;