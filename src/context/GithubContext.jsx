import React, { createContext, useEffect, useState } from 'react';
import { API } from '../lib/axios';

export const GithubContext = createContext();

const GithubProvider = (props) => {
    const [userData, serUserData] = useState();

    const setUserData = async () => {
        const response = await API.get('');
        serUserData(response.data);
    };

    useEffect(() => {
        setUserData();
    }, []);

    return (
        <GithubContext.Provider value={{ userData }}>
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubProvider;
