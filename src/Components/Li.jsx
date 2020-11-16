import React from 'react';


const Li = ({ id, local, click }) => {
    const { observacao } = local


    return (
        <React.Fragment>
            <li key={id} className="ToDoItem list-group-item list-group-item-action d-flex justify-content-between bd-highlight">
                <label className="h5 mx-1 my-1 text-break">{observacao}</label>
                <a href="/#" onClick={() => click(local)}>Ver no Mapa</a>
            </li>
        </React.Fragment>
    );
}

export default Li;