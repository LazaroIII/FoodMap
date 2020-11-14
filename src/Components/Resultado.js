import React from 'react';
import Li from './Li';

const Resultado = ({ locais }) => {

    //const cardsArray = robots.map((user, i) => <Card key={i} id={robots[i]}/>);

    return (
        <div>
            <ul id="ToDoList" class="list-group">
                {locais.map((local, i) => <Li id={i} local={local}/>)}
            </ul>
        </div>
    )
}

export default Resultado;