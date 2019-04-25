import styled from "styled-components";

const HomeLeft = styled.div`
  flex-grow: ${props => console.log(props)};
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default HomeLeft;

//
