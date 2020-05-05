import styled from "styled-components";

export const Container = styled.div`
  padding: 140px 0;

  overflow: hidden;

  h1, h2, h3, h4, h5 {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }

  h6, h7 {
    font-family: 'Inter', Arial, Helvetica, sans-serif;
  }

  p {
    font-size: 16px;
    line-height: 35px;

    color: #2A2951;
  }

  p, h1, h2, h3 {
    max-width: 70%;
  }
`;

export const Info = styled.div`
  margin-bottom: 95px;

  flex-basis: 1230px;
  width: auto;

  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  img {
    max-width: 610px;
    width: 100%;

    margin-right: -35px;

    @media (max-width: 900px) {
      align-self: center;
      order: -1;
      margin-right: 0;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 1200px) {
    text-align: ${(props) => props.invert ? 'inherit' : 'right'};
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    text-align: inherit;
  }

  img {
    max-width: 510px;
    max-height: 510px;
    width: 100%;

    margin-right: ${(props) => props.invert ? '-35px' : null};

    @media (max-width: 1200px) {
      align-self: center;
      order: -1;
      margin-right: 0;

      margin-top: 25px;
    }
  }
`;

export const Pricing = styled.div`
  margin-top: 225px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoText = styled.div`
  margin-right: 52px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  * {
    margin-left: 15vw;
  }

  @media (max-width: 900px) {
    margin-right: 0;
    margin-top: 52px;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 35px;

  * {
    margin-left: ${(props) => props.invert ? '15vw' : '70px'};
  }

  @media (max-width: 1200px) {
    margin-right: 0;
    margin-top: 35px;

    * {
      margin-left: 15vw;
    }
  }
`;

export const TextTitle = styled.h1`
  font-size: 54px;
  line-height: 81px;

  color: #2A2951;
`;

export const TextSubTitle = styled.h2`
  font-size: 48px;
  line-height: 72px;

  text-align: center;

  color: #2A2951;
`;

export const CardTitle = styled.h3`
  font-size: 40px;
  line-height: 60px;

  color: #5E758C;
`;

export const Divider = styled.div`
  background-color: #68e1fd;
  height: 4px;
  width: 50px;

  margin-top: ${(props) => props.top ? props.top : '50px'};
  margin-bottom: 50px;
`;

export const InfoTextDescription = styled.p`
  color: #2A2951;
`;

export const CardDescription = styled.p`
  margin-top: 10px;
`;

export const PricingDescription = styled.h4`
  font-size: 24px;
  line-height: 36px;

  color: #5E758C;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 + & {
    text-align: center;
  }
`;

export const MasterBoxes = styled.div`
  margin-top: 75px;
  display: flex;
  
  @media(max-width: 720px) {
    flex-direction: column;
  }
`;

export const PricingBoxes = styled.div`
  display: flex;

  @media(max-width: 1500px) {
    flex-direction: column;
    &:first-child {
      margin-right: 10px;
    }
  }

  @media(max-width: 750px) {
    flex-direction: column;
    margin-right: 0;
  }

`;

export const PricingBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 630px;
  border-radius: 15px;
  padding: 30px;
  
  margin-right: 40px;
  
  @media(max-width: 1500px) {
    &:first-child {
      margin-bottom: 50px;
    }
  }

  @media(max-width: 750px) {
    margin-bottom: 50px;
  }

  /* box-shadow: inset 0px 4px 10px rgba(185, 194, 209, 0.5); */

  background: ${(props) => props.bg ? props.bg : '#fff'};
  border: solid 2px ${(props) => props.col ? props.col : '#fff'};

  & > div:first-child {
    display: flex;
    align-items: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h5 {
        font-size: 18px;
        line-height: 22px;
      }

      p {
        display: flex;
        align-items: flex-end;
        color: rgba(0, 0, 0, 0.5);

        span {
          align-self: flex-start;
        }

        strong {
          color: #000000;
          font-size: 36px;
          line-height: 44px;
          align-self: center;
        }
      }
    }

  }

  img {
    margin-right: 15px;
  }
`;

export const PricingAdvantages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
`;

export const PricingAdvantagesTitle = styled.h6`
  font-size: 16px;
  line-height: 19px;

  color: ${(props) => props.white ? '#FFF' : '#000'};
`;

export const PricingAdvantage = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  color: ${(props) => props.white ? '#FFF' : '#000'};

  h6 {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const PricingButton = styled.button`
  ${(props) => props.icon ? `
    background: url(${props.icon}) ${props.bg ? props.bg : '#FFF'};
    background-repeat: no-repeat;
    background-position: 40px 14px;
    text-align: right;
  ` : `
    background-color: ${props.bg ? props.bg : '#FFF'};
    text-align: center;  
  `}

  width: 260px;
  height: 60px;

  color: ${(props) => props.col ? props.col : '#000000'};

  font-weight: bold;
  font-size: 18px;
  padding: 14px 40px;
  border-radius: 10px;
  border: 0;

  margin-top: auto;
`;

// export const Container = styled.div`
//   padding: 70px 0 0 0;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   overflow: auto;
// `;

// export const Info = styled.div`
//   img {
//     max-height: 600px;
//     max-width: 600px;
//     width: 100%;
//     height: auto;
//   }

//   padding: 50px 0;
// `;

// export const InfoContent = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;

//   @media (max-width: 320px) {
//     flex-direction: column;
//   }

//   @media (max-width: 480px) {
//     flex-direction: column;
//   }

//   @media (max-width: 950px) {
//     flex-direction: column;
//   }
// `;

// export const TitleContent = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;

//   @media (max-width: 320px) {
//     flex-direction: column;
//   }

//   @media (max-width: 480px) {
//     flex-direction: column;
//   }

//   @media (max-width: 950px) {
//     flex-direction: column;
//   }
// `;

// export const InfoTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 480px;

//   @media (max-width: 320px) {
//     max-width: 320px;
//   }

//   @media (max-width: 480px) {
//     max-width: 380px;
//   }

//   margin-left: ${(props) => (props.space ? "15px" : null)};
// `;

// export const TitleTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: 620px;

//   @media (max-width: 320px) {
//     max-width: 320px;
//   }

//   @media (max-width: 480px) {
//     max-width: 380px;
//   }

//   margin-left: ${(props) => (props.space ? "15px" : null)};

// `;

// export const InfoTextTitle = styled.p`
//   font-size: ${(props) => (props.diferent ? "40px" : "48px")};

//   font-family: 'Poppins', 'Inter', Arial, Helvetica, sans-serif;

//   text-align: ${(props) => (props.invert ? "right" : "left")};

//   font-weight: bold;
//   color: ${(props) => (props.diferent ? "#5E758C" : "#2A2951")};
// `;

// export const InfoText = styled.p`
//   font-size: 16px;
//   color: #2a2951;
//   line-height: 19px;

//   text-align: justify;

//   text-align-last: ${(props) => (props.invert ? "right" : null)};
// `;
