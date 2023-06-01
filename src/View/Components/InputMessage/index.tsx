import React from "react";
import { Input, InputWrapper, SendMessage } from "./styles";

interface InputMessageProps {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onClick(e: React.MouseEvent<HTMLElement>): void;
  value: string;
}

const InputMessage = ({ onChange, onClick, value }: InputMessageProps) => (
  <InputWrapper>
    <Input
      value={value}
      type="text"
      placeholder="Digite sua mensagem"
      onChange={onChange}
    />
    <SendMessage onClick={onClick} />
  </InputWrapper>
);

export default InputMessage;
