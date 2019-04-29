import styled from "styled-components";

const LoginLeft = styled.div`
  flex-grow: 5;
  height: 100%;
  overflow: hidden;
`;

const ImgLeft = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: bottom;
  width: 100%;
  height: 100%;
`;

export { LoginLeft, ImgLeft };
