import styled from 'styled-components';

export const CardContainer = styled.div`
    height: 16rem;
    width: 29rem;
    border-radius: 8px;
    padding: 1rem;
    background: ${(props) => props.theme['base-post']};

    padding: 2rem;

    :first-child {
        display: flex;
        align-content: top;
        justify-content: space-between;

        height: 3rem;

        h3 {
            color: ${(props) => props.theme['base-title']};
        }

        margin-bottom: 1rem;
    }

    span {
        color: ${(props) => props.theme['base-text']};
    }

    cursor: pointer;
    border: solid 1px transparent;

    &:hover {
        border: solid 1px ${(props) => props.theme['base-title']};
    }
`;
