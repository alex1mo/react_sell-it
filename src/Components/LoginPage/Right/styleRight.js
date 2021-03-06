import styled from "styled-components";

const LoginRight = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginLogo = styled.img`
  width: 60%;
  margin-top: 2rem;
`;

const LoginForm = styled.div`
  width: 86.9%;
  margin-top: 4.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tab = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const WrapperInput = styled.form`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Error = styled.div`
  color: red;
  padding-top: 10px;
  width: 100%;
  text-align: center;
`;

export { LoginRight, LoginLogo, LoginForm, Tab, WrapperInput, Error };
