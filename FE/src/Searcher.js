import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { getFilesList } from './services/filesServices';

const Searcher = ({ query, setQuery, handleSumbit, loading }) => {
    const [archivos, setArchivos] = useState([]);

    const getOpciones = async () => {
        const filesList = await getFilesList();
        setArchivos([...filesList]);
    };

    useEffect(() => {
        getOpciones();
    }, []);

    return (
        <div className='flex d-flex flex-row justify-content-end mr-5'>
            <form onSubmit={handleSumbit} className='flex d-flex flex-row gap-3'>
                <select
                    class='form-select'
                    aria-label='Seleccione una opción'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                >
                    <option key={0} value=''>
                        Todos los archivos
                    </option>
                    {archivos.map((archivo, index) => (
                        <option value={archivo} key={index + 1}>
                            {archivo}
                        </option>
                    ))}
                </select>
                <button type='submit' disabled={loading} className='btn btn-primary'>
                    Filtrar
                </button>
            </form>
        </div>
    );
};

export default Searcher;
