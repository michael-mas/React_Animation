import styled from "styled-components";
import '../CSS/text1.css'


export default function TextSection2() {
  return (
    <Wrapper>
      <Title>Des services sur mesures!</Title>
      <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </Description>
      <Description><a href="#ee"><button class="button">
  <span data-title="En voir plus!">Informations</span>
</button></a>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  max-width: 1000px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  width: 50%;
  z-index:1;
  height: 50%;
  top: 30%;
  left:25.33%;
  padding: 140px 1px 100px;4
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
   -khtml-user-select: none; /* Konqueror HTML */
     -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
          user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
`;

const Description = styled.p`
  max-width: 240px;
  color: rgba(255, 255, 255, 0.7);
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 130%;
  margin: 0 auto;
`;

