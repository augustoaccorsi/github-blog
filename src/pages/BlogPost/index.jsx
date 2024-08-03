import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RequestExecutor } from '../../utils/RequestExecutor';
import { BlogContainer, BlogContainerHeader } from './styles';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import {
    FaChevronLeft,
    FaGithub,
    FaCalendarDay,
    FaComment,
} from 'react-icons/fa';

const fetchIssue = async (issueNumber) => {
    return await RequestExecutor.fetchIssue(issueNumber);
};

const BlogPost = () => {
    const { issueNumber } = useParams();
    const [issue, setIssue] = useState();

    useEffect(() => {
        fetchIssue(issueNumber).then((data) => setIssue(data));
    }, []);

    console.log(issue);

    return (
        <BlogContainer>
            <BlogContainerHeader>
                <header>
                    <a>
                        <FaChevronLeft size={15} />
                        BACK
                    </a>
                    <a>
                        VIEW AT GITHUB <FaArrowUpRightFromSquare size={15} />
                    </a>
                </header>
                <main>
                    <h1>bla bla bla bla blk bal</h1>
                </main>
                <footer>
                    <div>
                        <FaGithub size={20} />
                        <span>augustoaccorsi</span>
                    </div>
                    <div>
                        <FaCalendarDay size={20} />
                        <span>ha 1 dia</span>
                    </div>
                    <div>
                        <FaComment size={20} />

                        <span>6 coments</span>
                    </div>
                </footer>
            </BlogContainerHeader>
        </BlogContainer>
    );
};

export default BlogPost;
