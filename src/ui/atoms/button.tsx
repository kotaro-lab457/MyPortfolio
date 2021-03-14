import styled from "styled-components";

const Button = styled.button`
  font-size: 1.2rem;
  padding: 10px;
  margin: 10px 0;
  border-radius: 20px;
  outline: none;
  background-color: #16c79a;
  font-weight: bold;
  opacity: 0.8;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 420px) {
    font-size: 1.1rem;
    padding: 0 10px;
  }
`;

const HeaderButton = styled(Button)`
  height: 50px;
  @media (max-width: 420px) {
    height: 40px;
    margin: 10px 5px 0 0;
  }
`;

const LoginButton = styled(Button)`
  font-size: 1.5rem;
  width: 445px;
  padding: 15px 20px;
  margin: 2rem 0;
  @media (max-width: 420px) {
    width: 325px;
    padding: 10px;
    margin: 1.5rem 0 1rem;
  }
`;

const SearchButton = styled(Button)`
  padding: 10px 20px;
  border-radius: 0 20px 20px 0;
  opacity: 1;
  @media (max-width: 420px) {
    padding: 4px 10px;
  }
`;
const RoomSearchButton = styled(SearchButton)`
  padding: 2px 10px;
  border: 1px solid #000;
  @media (max-width: 420px) {
    padding: 2px 10px;
    font-size: 1rem;
    margin: 0;
  }
`;

const UpdateButton = styled(Button)`
  font-size: 0.8rem;
  border-radius: 0px;
  padding: 5px 30px;
  margin: 0;
  border: 1px solid #16c79a;
`;

const CancelButton = styled.button`
  padding: 5px 17px;
  font-size: 0.8rem;
  opacity: 1;
  border: 1px solid #fff;
  outline: none;
  cursor: pointer;
`;

const IconButton = styled(Button)`
  font-size: 0.8rem;
  padding: 15px;
  border-radius: 50%;
  border: 1px solid #16c79a;
  margin: 0;
  @media (max-width: 420px) {
    padding: 10px;
  }
`;

const SetUpButton = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  background-color: #16c79a;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
  &::after {
    position: absolute;
    top: 26px;
    left: 50%;
    content: "";
    display: inline-block;
    width: 25px;
    height: 13px;
    border-top: 5px solid;
    transform: translateX(-50%);
  }
  &::before {
    position: absolute;
    content: "";
    top: 20px;
    left: 11px;
    display: inline-block;
    width: 25px;
    height: 13px;
    border-top: 5px solid;
    transform: rotate(90deg);
    &::hover {
      border-top: 4px solid #fff;
    }
  }
  &:active {
    color: #000;
  }
  @media (max-width: 420px) {
    opacity: 0.5;
    width: 50px;
    height: 50px;
    &:hover {
      opacity: 1;
    }
    &::after {
      top: 22px;
    }
    &::before {
      top: 16px;
      left: 6px;
    }
  }
`;

const ResetButton = styled(Button)`
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

export {
  Button,
  HeaderButton,
  LoginButton,
  SearchButton,
  SetUpButton,
  ResetButton,
  UpdateButton,
  CancelButton,
  IconButton,
  RoomSearchButton,
};
