import React from 'react';


const Li = ({ id, local, click }) => {
    //const { name, email } = id;
    const { observacao } = local
    //console.log('oi', latitude)


    return (
        <React.Fragment>
            <li id={id} class="ToDoItem list-group-item list-group-item-action d-flex justify-content-between bd-highlight">
                <label class="h5 mx-1 my-1 text-break">{observacao}</label>
                <button onClick={() => click(local)} test={local}>Ver no Mapa</button>
            </li>
        </React.Fragment>
    );
}

export default Li;