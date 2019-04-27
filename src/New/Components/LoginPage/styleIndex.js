import styled from "styled-components";

const Login = styled.div`
  display: flex;
  background-color: #00b3be;
  width: ${() => getComputedStyle(document.body).width};
  height: ${() => window.innerHeight + "px"};
`;

export default Login;

// html {
//   font-size: ${() => {
//     let width = window.innerWidth;
//     if (width > 1366) {
//       return `${32}px`;
//     } else if (width > 800) {
//       return `${16}px`;
//     }
//     return `${16}px`;
//   }};
// }
