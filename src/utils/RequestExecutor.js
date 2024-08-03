import { API } from '../lib/axios';

const REPO = 'augustoaccorsi/github-blog';

export const RequestExecutor = {
    fetchUserData: async () => {
        const response = await API.get('/users/augustoaccorsi');
        return response.data;
    },

    fetchIssues: async (query = '') => {
        const fullQuery = query.concat(' ').concat('repo:').concat(REPO);
        const response = await API.get('search/issues', {
            params: {
                q: fullQuery,
            },
        });
        return response.data.items;
    },

    fetchIssue: async (issueNumber) => {
        const response = await API.get(
            '/repos/'.concat(REPO).concat('/issues/').concat(issueNumber)
        );
        return response.data;
    },
};
