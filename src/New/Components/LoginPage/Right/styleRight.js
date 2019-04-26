import styled from "styled-components";

const LoginRight = styled.div`
  flex-grow: 1;
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

const FormButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const WrapperInput = styled.form`
  width: 100%;
  margin-top: 3rem;
`;

export { LoginRight, LoginLogo, LoginForm, FormButtons, WrapperInput };
