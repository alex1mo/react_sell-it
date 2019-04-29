import styled from "styled-components";

const DivItem = styled.div`
  width: 320px;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin: 1.1rem;

  .items-item.item__image {
    width: 100%;
    height: 80%;
  }

  .items-item.item__title.title {
    width: 100%;
    height: 20%;
    background-color: #00b3be;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem 0 1rem;
    box-sizing: border-box;
  }

  .item-title.title__eye {
    cursor: pointer;
  }
`;

export default DivItem;
