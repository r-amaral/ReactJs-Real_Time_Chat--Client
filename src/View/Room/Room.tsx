import React from "react";
import PageTemplateWrapper from "../Components/PageTemplate";
import InputMessage from "../Components/InputMessage";
import Message from "../Components/Message";
import { MessagesWrapper } from "./styles";

export const Room = () => {
  return (
    <PageTemplateWrapper>
      <MessagesWrapper>
        <Message
          user={false}
          name="Ruan"
          time="11:32"
          message="primeira mensagem"
        />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message
          user={false}
          name="Ruan"
          time="11:55"
          message="Terceira Mensagem"
        />
      </MessagesWrapper>

      <InputMessage
        onChange={() => {
          null;
        }}
        onClick={() => {
          null;
        }}
      />
    </PageTemplateWrapper>
  );
};
