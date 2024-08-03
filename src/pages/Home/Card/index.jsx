import React from 'react';
import { CardContainer } from './styles';
import { formatDistanceToNow } from 'date-fns';

const getFormattedBody = (body) => {
    if (body.length > 100) {
        const newBody = body.slice(0, 300);
        return newBody.concat('...');
    }
    return body;
};

const Card = ({ title, body, updated_at }) => {
    const formattedBody = getFormattedBody(body);
    const distanceFromNow = formatDistanceToNow(updated_at, {
        addSuffix: true,
    });

    return (
        <CardContainer>
            <div>
                <h3>{title}</h3>
                <span>{distanceFromNow}</span>
            </div>
            <span>{formattedBody}</span>
        </CardContainer>
    );
};

export default Card;
