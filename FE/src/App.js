import React from 'react';
import Title from './Title';
import TablePage from './TablePage';

const App = () => {
    return (
        <div className='container d-flex flex-column gap-2'>
            <Title />
            <TablePage />
        </div>
    );
};

export default App;
