import React from 'react';
import styled from 'styled-components';

import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as BookIcon } from '../../assets/book.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';

const NavigationBarContainer = styled.div`
    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    height: 59px;
    width: 100%;
    
    padding: 0px 55px 0px 52px;
    
    background-color: #FFFFFF;
`;

const NavigationBarItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: 100%;
    padding: 0px 16px;

    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: rgba(200, 200, 200, 0.3);
    }
`;

const NavigationBarItemText = styled.span`
    margin-top: 10px;
    font-size: 10px;
    line-height: 12px;
    color: ${props => props.selected ? '#313131' : '#BFBEBF'};
`;

export default function NavigationBar() {
    return (
        <NavigationBarContainer>
            <NavigationBarItem>
                <HomeIcon />
                <NavigationBarItemText selected>Home</NavigationBarItemText>
            </NavigationBarItem>
            <NavigationBarItem>
                <BookIcon />
                <NavigationBarItemText>Library</NavigationBarItemText>
            </NavigationBarItem>
            <NavigationBarItem>
                <UserIcon />
                <NavigationBarItemText>Profile</NavigationBarItemText>
            </NavigationBarItem>
        </NavigationBarContainer>
    );
}