import React from 'react';


const Li = ({ id, local }) => {
    //const { name, email } = id;
    const { observacao, latitude, longitude} = local
    //console.log('oi', latitude)
    return (
        <React.Fragment>
            <li id={id} class="ToDoItem list-group-item list-group-item-action d-flex justify-content-between bd-highlight">
                <label class="h5 mx-1 my-1 text-break">{observacao}</label>
                <a href={`http://www.google.com/maps/place/${latitude},${longitude}`}>Ver no Mapa</a>
            </li>
        </React.Fragment>
    );
}

export default Li;