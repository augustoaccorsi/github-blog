import React from 'react';
import logo from '../../assets/logo.svg';
import right from '../../assets/headerLeft.svg';
import left from '../../assets/headerRight.svg';
import { HeaderContainer, Logo, Left, Right } from './styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Left src={left} alt="" />
            <Logo src={logo} alt="" />
            <Right src={right} alt="" />
        </HeaderContainer>
    );
};

export default Header;
