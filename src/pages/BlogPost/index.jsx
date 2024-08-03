import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RequestExecutor } from '../../utils/RequestExecutor';
import {
    BlogContainer,
    BlogContainerHeader,
    BlogContainerConent,
} from './styles';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import {
    FaChevronLeft,
    FaGithub,
    FaCalendarDay,
    FaComment,
} from 'react-icons/fa';
import Markdown from 'react-markdown';
import { formatDistanceToNow } from 'date-fns';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const fetchIssue = async (issueNumber) => {
    return await RequestExecutor.fetchIssue(issueNumber);
};

const BlogPost = () => {
    const { issueNumber } = useParams();
    const [issue, setIssue] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetchIssue(issueNumber).then((data) => setIssue(data));
    }, [issueNumber]);

    const handleNavBack = () => {
        navigate('/');
    };

    return (
        <BlogContainer>
            <BlogContainerHeader>
                <header>
                    <a onClick={handleNavBack}>
                        <FaChevronLeft size={15} />
                        BACK
                    </a>
                    <a href={issue?.html_url} target="_blank" rel="noreferrer">
                        VIEW AT GITHUB <FaArrowUpRightFromSquare size={15} />
                    </a>
                </header>
                <main>
                    <h1>{issue?.title}</h1>
                </main>
                <footer>
                    <div>
                        <FaGithub size={20} />
                        <span>{issue?.user.login}</span>
                    </div>
                    <div>
                        <FaCalendarDay size={20} />
                        <span>
                            {issue &&
                                formatDistanceToNow(issue?.created_at, {
                                    addSuffix: true,
                                })}
                        </span>
                    </div>
                    <div>
                        <FaComment size={20} />

                        <span>{`${issue?.comments} comments`}</span>
                    </div>
                </footer>
            </BlogContainerHeader>

            <BlogContainerConent>
                <Markdown
                    children={issue?.body}
                    components={{
                        code(props) {
                            const { children, className, node, ...rest } =
                                props;
                            const match = /language-(\w+)/.exec(
                                className || ''
                            );
                            return match ? (
                                <SyntaxHighlighter
                                    {...rest}
                                    PreTag="div"
                                    children={String(children).replace(
                                        /\n$/,
                                        ''
                                    )}
                                    language={match[1]}
                                    style={dracula}
                                />
                            ) : (
                                <code {...rest} className={className}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                />
            </BlogContainerConent>
        </BlogContainer>
    );
};

export default BlogPost;
