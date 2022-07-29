import styled, { keyframes } from "styled-components";
import { ArrowheadDownOutline } from "@styled-icons/evaicons-outline/ArrowheadDownOutline";

export const Container = styled.div`
  background-color: var(--gray);
  width: auto;
  height: auto;
`;
export const FirstSection = styled.div`
  background-color: var(--gray);
  width: auto;
  height: 568px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media (min-width: 720px) {
    height: calc(1024px - 40px);
  }
  > h1 {
    color: var(--bg_primary);
    font-size: 53.2px;
    line-height: 62.34px;
    text-align: center;
    /* width: 200px; */
    @media (min-width: 720px) {
      width: 200px;
      margin-left: 22px;
      font-size: 82.2px;
      line-height: 96px;
      margin-top: -120px;
    }
  }
  > img {
    width: 285px;
    height: 140px;
    margin-top: 28px;
    mix-blend-mode: multiply;

    @media (min-width: 720px) {
      width: 682px;
      height: 335px;
      margin-left: 250px;
      margin-top: -140px;
    }
  }
  @media (min-width: 720px) {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
`;
export const animationArrow = keyframes`
  from {
    transform: translate(0, -25px);
  }
  to {
    transform: translate(0, -60px);
  }
`;
export const Arrow = styled(ArrowheadDownOutline)`
  width: 35px;
  height: auto;
  color: var(--white);
  position: absolute;
  bottom: 30px;
  animation: ${animationArrow} 3s linear infinite;
`;
export const Description = styled.div`
  @media (min-width: 720px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  > h1 {
    margin-top: 76px;
    font-size: 41.2px;
    line-height: 48px;
    width: 110%;
    @media (min-width: 720px) {
      font-size: 69.2px;
      line-height: 81px;
      margin-top: 428px;
      margin-left: 159px;
    }
  }
  > span {
    margin-top: 22px;
    font-size: 26.2px;
    line-height: 31px;
    @media (min-width: 720px) {
      font-size: 48.2px;
      line-height: 56px;
      margin-left: 159px;
    }
  }
`;
export const SecondSection = styled.div`
  background-color: var(--bg_secondary);
  width: auto;
  height: 568px;
  display: flex;
  align-content: center;
  align-items: flex-start;
  flex-direction: column;
  color: var(--white);
  padding: 18px;
  position: relative;
  @media (min-width: 720px) {
    height: 1024px;
  }
  > img {
    position: absolute;
    right: 0;
    bottom: 60px;
    width: 259px;
    height: 172px;
    mix-blend-mode: multiply;
    @media (min-width: 940px) {
      position: absolute;
      width: 838px;
      height: auto;
      top: 83px;
    }
    @media (min-width: 1080px) {
      width: 1038px;
      height: 689px;
    }
  }
`;
