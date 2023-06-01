import React from "react";
import PageTemplateWrapper from "../Components/PageTemplate";
import InputMessage from "../Components/InputMessage";
import Message from "../Components/Message";
import { InputWrapper, MessagesWrapper, ProfileWrapper } from "./styles";
import Profile from "../Components/Profile";

export const Room = () => {
  return (
    <PageTemplateWrapper>
      <ProfileWrapper>
        <Profile profileName="Ruan Oliveira" />
      </ProfileWrapper>
      <MessagesWrapper>
        <Message
          user={false}
          name="Ruan"
          time="11:32"
          message="primeira mensagem"
        />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message user name="vanessa" time="11:44" message="segunda mensagem" />
        <Message
          user={false}
          name="Ruan"
          time="11:55"
          message="Terceira Mensagem"
        />
      </MessagesWrapper>
      <InputWrapper>
        <InputMessage
          onChange={() => {
            null;
          }}
          onClick={() => {
            null;
          }}
        />
      </InputWrapper>
    </PageTemplateWrapper>
  );
};
