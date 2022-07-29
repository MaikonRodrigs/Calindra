import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 334px;
  background-color: var( --bg_footer);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--bg_primary);
  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-evenly;
    height: 226px;
    position: relative;
  }
`;
export const WrapperFirst = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-top: -22px;
  @media (min-width: 920px) {
    position: absolute;
    left: 181px;
    align-items: flex-start;
  }
  > h1 {
    font-size: 27.2px;
    line-height: 32px;
  }
  `;
export const WrapperSecond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin-top: -22px;
  @media (min-width: 720px) {
    align-items: flex-start;
  }
  > h1 {
    font-size: 27.2px;
    line-height: 32px;
  }
`;
export const Row = styled.div`
  @media (min-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const Social = styled.div`
  display: flex;
  margin: 24px 0 42px;
  cursor: pointer;

  @media (min-width: 720px) {
    margin: 15px 0;
  }
  > img {
    &.Facebook {
      margin: 0 26.39px;
    }
  }
`;
export const Adresses = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 720px) {
    align-items: flex-start;
    margin: 15px 0;
  }
  > p {
    font-size: 16.2px;
    /* line-height: 19px; */
  }
`;
