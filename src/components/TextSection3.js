import styled from "styled-components";



export default function TextSection3() {
  return (
    <Wrapper>
      <Title>WaveDih</Title>
    
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  max-width: 1000px;
  display: grid;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
  gap: 20px;
 
  opacity: 0.7;
  backdrop-filter: blur(10px);
  text-align: center;
  margin: 0 auto;
  width: 30%;
  height: 100%;
  top: auto;
  
  left:35.33%;
  padding: 140px 1px 100px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 75px;
`;

