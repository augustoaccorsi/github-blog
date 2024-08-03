import React, { useContext } from 'react';
import { SummaryContainer, UserAvatar } from './styles';
import { GithubContext } from '../../../context/GithubContext';
import { FaGithub, FaBuilding } from 'react-icons/fa';
import { FaUserGroup, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Summary = () => {
    const { userData } = useContext(GithubContext);
    return (
        <SummaryContainer>
            <UserAvatar src={userData?.avatar_url} alt="" />
            <div>
                <header>
                    <h1>{userData?.name}</h1>
                    <a
                        href={userData?.html_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GITHUB <FaArrowUpRightFromSquare size={15} />
                    </a>
                </header>
                <main>
                    <span>{userData?.bio}</span>
                </main>
                <footer>
                    <div>
                        <FaGithub size={20} />
                        <span>{userData?.login}</span>
                    </div>
                    <div>
                        <FaBuilding size={20} />
                        <span>{userData?.company}</span>
                    </div>
                    <div>
                        <FaUserGroup size={20} />

                        <span>{userData?.followers}</span>
                    </div>
                </footer>
            </div>
        </SummaryContainer>
    );
};

export default Summary;
