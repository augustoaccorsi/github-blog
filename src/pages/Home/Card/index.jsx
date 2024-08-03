import React from 'react';
import { CardContainer } from './styles';
import { formatDistanceToNow } from 'date-fns';
import { useNavigate } from 'react-router-dom';

const getFormattedBody = (entry) => {
    const body = entry.split('#').join('');
    if (body.length > 100) {
        const newBody = body.slice(0, 300);
        return newBody.concat('...');
    }
    return body;
};

const Card = ({ title, body, updated_at, number }) => {
    const navigate = useNavigate();

    const formattedBody = getFormattedBody(body);
    const distanceFromNow = formatDistanceToNow(updated_at, {
        addSuffix: true,
    });

    const handleIssueClick = () => {
        navigate('/blogPost/'.concat(number));
    };

    return (
        <CardContainer onClick={handleIssueClick}>
            <div>
                <h3>{title}</h3>
                <span>{distanceFromNow}</span>
            </div>
            <span>{formattedBody}</span>
        </CardContainer>
    );
};

export default Card;
