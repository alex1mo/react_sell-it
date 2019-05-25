import styled from "styled-components";

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 87%;
  overflow: auto;
  box-sizing: border-box;
  ::after {
    content: "Form";
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 87%;
  overflow: auto;
  box-sizing: border-box;
  img {
    width: 30%;
  }
  li {
    padding: 1rem 0 1rem 0;
  }
`;

export { Form, Profile };
