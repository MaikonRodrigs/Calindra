import React from 'react';
import * as S from './styles';
import FirstBannerSrc from "../../Assets/firstSectionImg.png";
import SecondBannerSrc from "../../Assets/secondSectionImg.png";


interface IHomeProps {
  TextInitial?: string;
}

const Homepage: React.FC<IHomeProps> = ({
  TextInitial = "Measuring everything",
}
) => {
  return (
    <S.Container>
      <S.FirstSection>
        <h1>Measuring  <br />everything</h1>
        <img src={FirstBannerSrc}></img>
        <S.Arrow />
      </S.FirstSection>
      <S.SecondSection>
        <S.Description>
          <h1>We are Leader <br />in Measure Tapes</h1>
          <span>There are 5x the <br />circumference of planet<br /> earth in metric tapes.</span>
        </S.Description>
        <img src={SecondBannerSrc}></img>
      </S.SecondSection>
    </S.Container>
  )
}

export default Homepage;