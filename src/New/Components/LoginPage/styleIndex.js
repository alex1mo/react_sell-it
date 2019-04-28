import styled from "styled-components";

const Login = styled.div`
  display: flex;
  background-color: #00b3be;
  width: ${() => getComputedStyle(document.body).width};
  height: ${() => window.innerHeight + "px"};
`;

export default Login;
