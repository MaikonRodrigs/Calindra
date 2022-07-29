import styled from "styled-components";
import { ThreeDotsVertical } from "@styled-icons/bootstrap/ThreeDotsVertical";

export const Container = styled.div`
  width: auto;
  height: 57px;
  background: var(--white);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (min-width: 720px) {
    display: flex;
    justify-content: flex-start;
    padding-left: 37px;
    height: 110px;
  }
`;
export const DotsIcon = styled(ThreeDotsVertical)`
  color: #e2e0b8;
  width: 35px;
  position: absolute;
  left: 0;
  cursor: pointer;
  @media (min-width: 720px) {
    display: none;
  }
`;
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 38px;
    height: 38px;
    @media (min-width: 720px) {
      width: 71px;
      height: 70px;
    }
  }
`;
export const LogoText = styled.h1`
  display: flex;
  flex-direction: column;
  color: var(--text_primary);
  margin-left: 20px;
  > h1 {
    font-size: 41.2px;
    line-height: 48px;
    margin-bottom: -5px;
  }
  > p {
    font-size: 16.2px;
    line-height: 19px;
    letter-spacing: 5.4px;
    font-weight: 100;
  }
  @media (max-width: 920px) {
    display: none;
  }
`;
export const ItemsMenu = styled.div`
  position: absolute;
  right: 64px;
  cursor: pointer;
  > span {
    font-size: 16.2px;
    line-height: 19px;
    letter-spacing: 5.4px;
    color: var(--text_primary);
    font-weight: 100;
    &:hover {
      color: var(--black);
      border-bottom: 2px var(--black) solid;
      padding-bottom: 6px;
    }
    margin-left: 128px;
    @media (max-width: 1200px) {
      font-size: 14.2px;
      line-height: 19px;
      margin-left: 38px;
    }
  }
  @media (max-width: 720px) {
    display: none;
  }
`;
