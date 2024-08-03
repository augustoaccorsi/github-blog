import React, { createContext, useEffect, useState } from 'react';
import { RequestExecutor } from '../utils/RequestExecutor';

export const GithubContext = createContext();

const GithubProvider = (props) => {
    const [userData, serUserData] = useState({});
    const [issues, setIssues] = useState([]);

    const fetchUserData = async () => {
        const data = await RequestExecutor.fetchUserData();
        serUserData(data);
    };

    const fetchIssues = async (query = '') => {
        const data = await RequestExecutor.fetchIssues(query);
        setIssues(data);
    };

    useEffect(() => {
        fetchUserData();
        fetchIssues();
    }, []);

    const searchForIssues = (query) => {
        fetchIssues(query);
    };

    return (
        <GithubContext.Provider value={{ userData, issues, searchForIssues }}>
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubProvider;
