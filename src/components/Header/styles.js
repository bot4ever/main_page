import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;

  background: #ffffff;
  box-shadow: ${(props) =>
    `0px 3px 6px 0px rgba(0, 0, 0, ${
      props.scrollPos >= 10 ? `0.73` : 0.0125 * props.scrollPos
    })`};
`;

export const Content = styled.div`
  height: 70px;
  max-width: 70vw;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      height: 100px;
      width: 100px;
      width: 100%;
      height: auto;
    }
  }

  aside {
    display: flex;
    align-items: center;

    @media (max-width: 320px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const Link = styled.a`
  padding: 0 10px;
  cursor: pointer;

  @media (max-width: 320px) {
    padding: 0 5px;
  }
`;
