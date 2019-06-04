import styled from "styled-components";

const DivSearch = styled.div`
  display: flex;
  align-items: center;
  width: 34.8%;
  height: 50%;
  position: relative;
  border-bottom: 2px solid #00b3be;
  padding: 0 1.5rem 2px 1.5rem;
  box-sizing: border-box;

  .header-search.search__input.input {
    width: 100%;
    height: 100%;
    padding-left: 0.5rem;
    outline: none;
    border: none;
  }

  .header-search.search__input::placeholder {
    color: #8d7b7b;
    font-family: "Arial MT";
    height: 100%;
  }

  img {
    height: 1rem;
  }
`;

export default DivSearch;
