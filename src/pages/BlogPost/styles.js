import styled from 'styled-components';

export const BlogContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: -5rem;
    flex-direction: column;
`;

export const BlogContainerHeader = styled.div`
    height: 12rem;
    width: 60rem;

    border-radius: 8px;
    margin: 0 auto;

    background: ${(props) => props.theme['base-profile']};

    padding: 2rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            display: flex;
            align-items: center;

            gap: 1rem;

            color: ${(props) => props.theme['blue']};
            text-decoration: none;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    main {
        color: ${(props) => props.theme['base-title']};
        font-weight: bold;
        padding: 1rem 0;
    }

    footer {
        display: flex;
        justify-content: left;
        align-items: center;
        gap: 2rem;

        div {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;

            svg {
                color: ${(props) => props.theme['base-label']};
            }

            span {
                color: ${(props) => props.theme['base-span']};
            }
        }
    }
`;

export const BlogContainerConent = styled.div`
    margin-top: 1rem;
    padding: 2rem;
    width: 60rem;
`;
