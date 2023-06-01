import styled from "styled-components";
import SendIcon from "../../assets/send.svg";

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #282843;
  border-radius: 999px;
  padding: 14px 24px;
  gap: 10px;
  box-sizing: border-box;
  height: 52px;
`;

export const Input = styled.input`
  outline: none;
  height: 100%;
  width: 100%;

  background: transparent;
  border: none;
  color: #e1e1e6;

  &::placeholder {
    color: #e1e1e6;
  }
`;

export const SendMessage = styled.i`
  width: 24px;
  height: 24px;
  background-image: url(${SendIcon});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  cursor: pointer;
`;
