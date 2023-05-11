import React, { useState, useEffect } from 'react';
import Searcher from './Searcher';
import Table from './Table';
import { getFilesData } from './services/filesServices';

const TablePage = () => {
    const [list, setList] = useState([]);
    const [query, setQuery] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        try {
            setLoading(true);
            const files = await getFilesData(query);
            setList(files);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        consultarInformacion();
    };

    return (
        <div className='flex d-flex flex-column gap-3'>
            <Searcher query={query} setQuery={setQuery} handleSumbit={handleSumbit} loading={loading} />
            <Table list={list} loading={loading} />
        </div>
    );
};

export default TablePage;
