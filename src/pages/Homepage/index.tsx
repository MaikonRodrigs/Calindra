import React from 'react';
import * as S from './styles';

interface IHomeProps {
  urlImgFirstSection?: string;
  urlImgSecondSection?: string;
}

const Homepage: React.FC<IHomeProps> = ({
  urlImgFirstSection = "https://raw.githubusercontent.com/MaikonRodrigs/Calindra/main/src/Assets/firstSectionImg.png",
  urlImgSecondSection = "https://raw.githubusercontent.com/MaikonRodrigs/Calindra/main/src/Assets/secondSectionImg.png",
}
) => {
  return (
    <S.Container>
      <S.FirstSection>
        <h1>Measuring  <br />everything</h1>
        <img src={urlImgFirstSection}></img>
        <S.Arrow />
      </S.FirstSection>
      <S.SecondSection>
        <S.Description>
          <h1>We are Leader <br />in Measure Tapes</h1>
          <span>There are 5x the <br />circumference of planet<br /> earth in metric tapes.</span>
        </S.Description>
        <img src={urlImgSecondSection}></img>
      </S.SecondSection>
    </S.Container>
  )
}

export default Homepage;