import React from 'react';
import YoutubeImg from '../../Assets/Youtube.png'
import FacebookImg from '../../Assets/Facebook.png'
import TwitterImg from '../../Assets/Twitter.png'
import * as S from './styles';


const Footer = () => {
  return (
    <S.Container>
      <S.WrapperFirst>
        <h1>Follow Us</h1>
        <S.Social>
          <img src={YoutubeImg}></img>
          <img src={FacebookImg} className="Facebook"></img>
          <img src={TwitterImg}></img>
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