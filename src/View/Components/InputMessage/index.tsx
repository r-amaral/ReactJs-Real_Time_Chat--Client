import React from "react";
import { Input, InputWrapper, SendMessage } from "./styles";

interface InputMessageProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

const InputMessage = ({ onChange, onClick }: InputMessageProps) => {
  return (
    <InputWrapper>
      <Input
        type="text"
        placeholder="Digite sua mensagem"
        onChange={onChange}
      />
      <SendMessage onClick={onClick} />
    </InputWrapper>
  );
};

export default InputMessage;
