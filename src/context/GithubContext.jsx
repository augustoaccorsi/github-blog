import React, { createContext, useEffect, useState } from 'react';
import { API } from '../lib/axios';

export const GithubContext = createContext();

const REPO = 'augustoaccorsi/github-blog';

const GithubProvider = (props) => {
    const [userData, serUserData] = useState({});
    const [issues, setIssues] = useState([]);

    const fetchUserData = async () => {
        const response = await API.get('/users/augustoaccorsi');
        serUserData(response.data);
    };

    const fetchIssues = async (query = '') => {
        const fullQuery = query.concat(' ').concat('repo:').concat(REPO);
        const response = await API.get('search/issues', {
            params: {
                q: fullQuery,
            },
        });
        setIssues(response.data.items);
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
