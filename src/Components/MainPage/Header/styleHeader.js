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
  position: relative;

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
  :hover {
    .sub-menu {
      display: flex;
    }
  }
`;

const DivMenu = styled.div`
  width: 100%;
  position: absolute;
  bottom: -100%;
  left: 0px;
  height: 100%;
  background-color: #00b3be;
  display: none;
  align-items: center;
  justify-content: space-around;
  hr {
    height: 95%;
    margin: 0;
  }
  a {
    font-size: 1rem;
    color: white;
    width: 50%;
    display: flex;
    justify-content: center;
    text-decoration: none;
  }
`;

export { DivUser, DivMenu };
