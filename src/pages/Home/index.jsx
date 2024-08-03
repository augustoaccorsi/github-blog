import React, { useContext, useState } from 'react';
import Summary from './Summary/index';
import { SearchContainer, PostContainer } from './styles';
import { GithubContext } from '../../context/GithubContext';
import Card from './Card/index';

const Home = () => {
    const { issues, searchForIssues } = useContext(GithubContext);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchKeyDown = (key) => {
        if (key === 'Enter') {
            searchForIssues(searchQuery);
            setSearchQuery('');
        } else if (key === 'Escape') {
            searchForIssues('');
            setSearchQuery('');
        }
    };

    return (
        <div>
            <Summary />
            <SearchContainer>
                <div>
                    <h3>Posts</h3>
                    <span>{`${issues?.length} posts`}</span>
                </div>
                <div>
                    <input
                        placeholder="Search for content"
                        onChange={(event) => setSearchQuery(event.target.value)}
                        value={searchQuery}
                        onKeyDown={(event) => handleSearchKeyDown(event.code)}
                    />
                </div>
            </SearchContainer>
            <PostContainer>
                {issues.map((issue) => (
                    <Card
                        key={issue.id}
                        title={issue.title}
                        body={issue.body}
                        updated_at={issue.updated_at}
                    />
                ))}
            </PostContainer>
        </div>
    );
};

export default Home;
