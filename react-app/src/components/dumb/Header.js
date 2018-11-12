import React from 'react'
import {HeaderStyled, Title, SubTitle, LinkBox} from './styledComponent/header'

// Create two links to navigate between the pages.
// "DashBoard" and "Your wallet" => wallet is in ../wallet/WalletDashBoard.js
// note StyledLink is a styled component that you can use for that.
// You can find it in the folder dumb/styledComponent/header.js

export const Header = () => (
  <HeaderStyled>
    <div>
      <Title>HackCoin</Title>
      <SubTitle>Hello there! General Kenobi</SubTitle>
    </div>
    <LinkBox>{/*
      TODO
    */}</LinkBox>
  </HeaderStyled>
)
