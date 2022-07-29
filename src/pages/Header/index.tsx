import React, { useState } from 'react';
import * as S from './styles';

interface IHeaderProps {
  urlImgLogo?: string;
}

const Header: React.FC<IHeaderProps> = ({
  urlImgLogo = "https://raw.githubusercontent.com/MaikonRodrigs/Calindra/main/src/Assets/Logo.png",
}
) => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const HandlerOpenNav = () => {
    setOpenNav(!openNav);
    console.log(openNav);
  }
  return (
    <S.Container>
      <S.DotsIcon onClick={HandlerOpenNav} />
      <S.Logo>
        <img src={urlImgLogo} />
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