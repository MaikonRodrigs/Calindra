import React, { useState } from 'react';
import * as S from './styles';
import LogoSrc from "../../Assets/Logo.png";

const Header = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const HandlerOpenNav = () => {
    setOpenNav(!openNav);
    console.log(openNav);
  }
  return (
    <S.Container>
      <S.DotsIcon onClick={HandlerOpenNav} />
      <S.Logo>
        <img src={LogoSrc} />
        <S.LogoText>
          <h1>zutterman</h1>
          <p>measure tapes</p>
        </S.LogoText>
      </S.Logo>
      <S.ItemsMenu>
        <span>ABOUT US</span>
        <span>MODELS</span>
        <span>GUARANTEE</span>
      </S.ItemsMenu>
    </S.Container>
  );
}

export default Header;