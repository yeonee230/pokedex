import React from 'react';
import styled from 'styled-components'
import { b, v } from '../styles/variables';

export default function Navbar() {
    return (
        <>
        <NavHeight />
        <NavFixed>
            <NavHeader>
                <Left>left</Left>
                <Center>center</Center>
                <Right>right</Right>

            </NavHeader>
        </NavFixed>
        </>
    );
}

const NavFixed = styled.div`
position: fixed;
right: 0;
left: 0;
top: 0;
height: ${v.headerHeight};
//background-color: ${({theme}) => theme.background};
background-color: pink;
z-index: 10;
`;

const NavHeight = styled.div`
    height: ${v.headerHeight};
`

const NavHeader = styled.header`
    margin: 0 auto;
    height: 100%;
    width: 100%;
    max-width: 1920px;
    display: flex;
    align-items: center;

    transition: 0.3s ease padding;
    padding: 0 ${v.mdSpacing};

    @media ${b.lg} {
        padding: 0 ${v.lgSpacing}; 
    }

    > div {
            flex: 1;
        }
`

const Left = styled.div``
const Center = styled.div`

`
const Right = styled.div``