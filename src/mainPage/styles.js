import styled from "styled-components";

export const Container = styled.div`
  padding: 140px 0;

  overflow: hidden;

  h1 {
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }

  p {
    font-size: 16px;
    line-height: 35px;

    color: #2A2951;
  }

  p, h1 {
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
  font-size: 48px;
  line-height: 72px;

  color: #2A2951;
`;

export const CardTitle = styled.h1`
  font-size: 40px;
  line-height: 60px;

  color: #5E758C;
`;

export const Divider = styled.div`
  background-color: #68e1fd;
  height: 4px;
  width: 50px;

  margin-top: 50px;
  margin-bottom: 50px;
`;

export const InfoTextDescription = styled.p`
  color: #2A2951;
`;

export const CardDescription = styled.p`
  margin-top: 10px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 + & {
    text-align: center;
  }
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
