import styled from "styled-components";

const StyleInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4.5vh;
  .form-input.input__text {
    border-style: none;
    border-bottom: 0.19vh solid #fff;
    padding-bottom: 0.5vh;
    outline: none;
    background: inherit;
    ::placeholder {
      color: white;
    }
  }
  .form-input.input__error {
    color: red;
    font-size: 1rem;
    height: 1rem;
    width: 100%;
  }

  .form-input.input__null {
    height: 1rem;
  }
`;

export { StyleInput };
