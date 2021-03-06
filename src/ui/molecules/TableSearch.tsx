import styled from "styled-components";

const TableSearch = styled.div`
  text-align: center;
`;
const ListSearch = styled.div`
  @media (max-width: 420px) {
    overflow-y: scroll;
    height: 66vh;
  }
`;

const ItemSearch = styled.div`
  display: flex;
  padding: 20px 40px;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  @media (max-width: 420px) {
    padding: 10px;
    margin: 5px;
  }
`;

const TextSearch = styled.div`
  text-align: left;
  margin-left: 3rem;
  @media (max-width: 420px) {
    margin: 0.5rem 0 0 1rem;
  }
`;

export { TableSearch, ItemSearch, TextSearch, ListSearch };
