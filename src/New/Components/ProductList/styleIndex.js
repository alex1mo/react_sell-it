import styled from "styled-components";
import Login from "../LoginPage/styleIndex";

const Wrapper = styled(Login)`
  display: block;
  background-color: white;
  .productlist__header.header {
    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .productlist__wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 87%;
    overflow: auto;
    /* margin-top: 1rem; */
    box-sizing: border-box;
  }

  .productlist__items.items {
    width: ${props => props.width + "px"};
    display: flex;
    flex-wrap: wrap;
  }

  .productlist-header.header__logo {
    height: 80%;
    margin-left: 3rem;
  }
`;

export default Wrapper;
