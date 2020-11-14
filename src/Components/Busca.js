import React from 'react';

const Busca = ({ quandoMudar, submit }) => {
    
    return (
        <React.Fragment>
            <div className="form-inline justify-content-center mr-1 mt-1 pb-2">
                <input type='search' placeholder='Busca' onChange={quandoMudar} className='form-control mx-sm-3'/>
                <input type='button' value='Buscar' onClick={submit} />
            </div>
        </React.Fragment>
    )
}

export default Busca;