import React from 'react';
import Li from './Li.jsx';



const Resultado = ({ locais, showMap }) => {
        return (
            
            <div>
                <ul id="ToDoList" className="list-group">
                    {locais.map((local, i) => <Li key={i} local={local} click={showMap}/>)}
                </ul>
            </div>
        )
}

export default Resultado;