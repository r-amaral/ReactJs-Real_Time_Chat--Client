import styled from "styled-components";

export const JoinRoomWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 94px);
  width: 100%;
  box-sizing: border-box;
  gap: 10px;
`;

export const JoinRoomInput = styled.input`
  outline: none;

  background: transparent;
  border: none;
  color: #e1e1e6;
  background: #282843;
  font-size: 18px;
  padding: 16px;
  border-radius: 10px;

  box-shadow: rgb(64, 37, 122) 0px 0px 0px 1px;
  transition: all 300ms ease-in-out 0s;

  &::placeholder {
    color: #e1e1e6;
  }

  &:hover {
    box-shadow: rgb(91, 58, 161) 0px 0px 0px 2px;
  }
`;

export const ButtonJoinRoom = styled.button`
  padding: 20px 16px;
  border-radius: 8px;
  background: #282843;

  color: #e1e1e6;
  transition: all 300ms ease-in-out 0s;
  box-shadow: rgb(64, 37, 122) 0px 0px 0px 1px;

  &:hover {
    box-shadow: rgb(91, 58, 161) 0px 0px 0px 2px;
  }
  border: none;
  outline: none;
  cursor: pointer;
`;
