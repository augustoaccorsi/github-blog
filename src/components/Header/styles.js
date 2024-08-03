import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: ${(props) => props.theme['base-post']};

    height: 17rem;
`;

export const Logo = styled.img`
    margin-top: -4rem;
`;

export const Left = styled.img`
    margin-top: 2rem;
    margin-bottom: 1rem;
`;

export const Right = styled.img`
    margin-top: 1rem;
    margin-bottom: 1rem;
`;
