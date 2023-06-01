import React from "react";
import { Input, InputWrapper, SendMessage } from "./styles";

interface InputMessageProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onClick(): void;
  value: string;
}

type KeyPressType = React.KeyboardEvent<HTMLInputElement>;

const InputMessage = ({ onChange, onClick, value }: InputMessageProps) => {
  const postMessagByKeyPress = ({ key }: KeyPressType) => {
    if (key === "Enter") onClick();
  };

  return (
    <InputWrapper>
      <Input
        value={value}
        type="text"
        placeholder="Digite sua mensagem"
        onChange={onChange}
        onKeyDown={postMessagByKeyPress}
      />
      <SendMessage onClick={onClick} />
    </InputWrapper>
  );
};
export default InputMessage;
