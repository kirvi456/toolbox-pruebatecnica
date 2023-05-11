import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Table = ({ list, loading }) => {
    return (
        <div className='container'>
            <table className='table border'>
                <thead>
                    <tr className='table-primary'>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th className='col-md-6'>Hex</th>
                    </tr>
                </thead>
                {loading ? (
                    <tbody>
                        <tr>
                            <td>cargando...</td>
                            <td>cargando...</td>
                            <td>cargando...</td>
                            <td>cargando...</td>
                        </tr>
                    </tbody>
                ) : (
                    <tbody>
                        {list.map((line, index) => (
                            <tr key={index}>
                                <td>{line.file}</td>
                                <td>{line.text}</td>
                                <td>{line.number}</td>
                                <td>{line.hex}</td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    );
};

export default Table;
