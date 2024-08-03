import styled from 'styled-components';

export const SummaryContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;

    height: 13rem;
    width: 60rem;

    border-radius: 8px;

    margin-top: -5rem;

    background: ${(props) => props.theme['base-profile']};

    span {
        display: inline-block;
    }

    header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;

        width: 45rem;

        h1 {
            color: ${(props) => props.theme['base-title']};
        }

        a {
            justify-self: end;
            color: ${(props) => props.theme['blue']};
            text-decoration: none;
            font-weight: bold;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    main {
        color: ${(props) => props.theme['base-text']};
    }

    footer {
        display: flex;
        gap: 2rem;

        margin-top: 2rem;

        color: ${(props) => props.theme['base-subtitle']};

        gap: 2rem;
        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            svg {
                color: ${(props) => props.theme['base-label']};
            }
        }
    }
`;

export const UserAvatar = styled.img`
    height: 9rem;
    width: 9rem;
    border-radius: 8px;

    margin: 2rem;
`;
