import styled from "styled-components";

export default function TextSection() {
  return (
    <Wrapper>
      <Title>WaveDih</Title>
      <Description>
        Des services sur mesures!
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  max-width: 380px;
  display: grid;
  gap: 20px;
  text-align: center;
  margin: 0 auto;
  top: auto;
  left:59.33%;
  padding: 140px 20px 100px;
`;

const Title = styled.h1`
  color: rgba(255, 255, 255, 1);
  font-style: normal;
  font-weight: bold;
  font-size: 75px;
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