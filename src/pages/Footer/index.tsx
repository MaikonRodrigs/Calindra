import React from 'react';
import * as S from './styles';

interface IFooterProps {
  urlYoutubeIcon?: string;
  urlFacebookIcon?: string;
  urlYTwiiterIcon?: string;
}


const Footer: React.FC<IFooterProps> = ({
  urlYoutubeIcon = "https://raw.githubusercontent.com/MaikonRodrigs/Calindra/main/src/Assets/youtube.png",
  urlFacebookIcon = "https://raw.githubusercontent.com/MaikonRodrigs/Calindra/main/src/Assets/facebook.png",
  urlYTwiiterIcon = "https://raw.githubusercontent.com/MaikonRodrigs/Calindra/main/src/Assets/twitter.png",
}) => {
  return (
    <S.Container>
      <S.WrapperFirst>
        <h1>Follow Us</h1>
        <S.Social>
          <img src={urlYoutubeIcon}></img>
          <img src={urlFacebookIcon} className="Facebook"></img>
          <img src={urlYTwiiterIcon}></img>
        </S.Social>
      </S.WrapperFirst>
      <S.WrapperSecond>
        <h1>Contact</h1>
        <S.Adresses>
          <p>2490 Leisure Lane</p>
          <p>San Luis Obispo</p>
          <p>California</p>
        </S.Adresses>
      </S.WrapperSecond>
    </S.Container >
  );
}

export default Footer;