import React, { useEffect, useState } from 'react';
import { API } from '../../lib/axios';
import { useParams } from 'react-router-dom';
import { RequestExecutor } from '../../utils/RequestExecutor';

const fetchIssue = async (issueNumber) => {
    return await RequestExecutor.fetchIssue(issueNumber);
};

const BlogPost = () => {
    const { issueNumber } = useParams();
    const [issue, setIssue] = useState();

    useEffect(() => {
        fetchIssue(issueNumber).then((data) => setIssue(data));
    }, [issueNumber]);

    console.log(issue);
    return <div>{JSON.stringify(issue, 2, 2)}</div>;
};

export default BlogPost;
