import styled from "styled-components";

const DivUser = styled.div`
  width: 27%;
  height: 100%;
  padding: 0 1rem 0 1rem;
  background-color: #00b3be;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;

  .header-user.user__name {
    display: flex;
    align-items: center;
    height: 90%;
  }

  .user-name.name__foto {
    height: 100%;
  }

  .user-name.name__text {
    margin-left: 1rem;
    color: #ffffff;
    font-family: "Arial - Bold MT";
    font-size: 1rem;
    font-weight: 400;
  }

  .header-user.user__signout {
    height: 100%;
    cursor: pointer;
  }
`;

export default DivUser;
