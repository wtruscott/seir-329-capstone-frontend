import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { Link, uselocation } from 'react-router-dom';

const Search = () => {
    const search = 'search';
    const [appState, setAppState] = useState({
        search: '',
        things: [],
    });

    useEffect(() => {
        axiosInstance.get(search + '/' + window.location.search).then((res) => {
            const allThings = res.data;
            setAppState({ things: allThings });
        });
    }, [setAppState]);

    return (
        <div>
            {appState.things.map((thing) => {
                return (
                    <Link to={'things/' + thing.slug}>{thing.name}</Link>
                )
            })}
        </div>
    )
}

export default Search