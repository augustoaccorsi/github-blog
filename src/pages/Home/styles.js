import styled from 'styled-components';

export const SearchContainer = styled.div`
    margin: 0 auto;

    width: 60rem;

    margin-top: 3rem;

    :first-child {
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
            color: ${(props) => props.theme['base-subtitle']};
        }

        span {
            color: ${(props) => props.theme['base-span']};
        }
    }

    input {
        margin-top: 1rem;
        margin-bottom: 3rem;
        height: 3rem;
        width: 60rem;
        padding: 1rem;
        background: ${(props) => props.theme['base-input']};
        color: ${(props) => props.theme['base-text']};
        border: 0;
        border-radius: 8px;

        &::placeholder {
            color: ${(props) => props.theme['base-label']};
        }
    }
`;

export const PostContainer = styled.div`
    margin: 0 auto;
    width: 60rem;

    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 2rem;
`;
