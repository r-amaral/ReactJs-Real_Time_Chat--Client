import React from "react";
import PageTemplateWrapper from "../../Components/PageTemplate";
import InputMessage from "../../Components/InputMessage";
import Message from "../../Components/Message";
import {
  InputWrapper,
  MessagesWrapper,
  ProfileLeave,
  ProfileWrapper,
} from "./styles";
import Profile from "../../Components/Profile";
import io from "socket.io-client";

import * as uuid from "uuid";
import { PayloadProps } from "../../Interfaces";
import { useRoomData } from "../../Context";
import { timeFormart } from "../../utils";
import { useNavigate } from "react-router-dom";

export const Room = () => {
  const port = 3001;
  const listRef = React.useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const { author, message, setMessage, messages, setMessages, socketIORef } =
    useRoomData();

  const handleSendMessage = async () => {
    if (message) {
      const messageData: PayloadProps = {
        id: uuid.v4(),
        author,
        message,
        time: timeFormart(),
      };

      socketIORef.current?.emit("msgToClient", messageData);
      setMessage("");
    }
  };

  const receivedMessage = (newmessage: PayloadProps) => {
    const messageData: PayloadProps = {
      id: uuid.v4(),
      author: newmessage.author,
      message: newmessage.message,
      time: timeFormart(),
    };

    setMessages([...messages, messageData]);
  };

  const connectionSocket = () => {
    socketIORef.current = io(`http://localhost:${port}`);
    socketIORef.current.on("connect", () => console.log("conectado"));
    socketIORef.current!.on("msgToClient", (message: PayloadProps) =>
      receivedMessage(message)
    );
  };

  React.useEffect(() => {
    if (!author) navigate("/");
    connectionSocket();
  }, [socketIORef, messages, author, message]);

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <PageTemplateWrapper>
      <ProfileWrapper>
        <Profile profileName={author} />
        <ProfileLeave onClick={() => navigate("/")}>Leave</ProfileLeave>
      </ProfileWrapper>
      <MessagesWrapper ref={listRef}>
        {messages.map((message) => (
          <Message
            key={message.id}
            user={message.author === author}
            name={message.author}
            time={message.time}
            message={message.message}
          />
        ))}
      </MessagesWrapper>
      <InputWrapper>
        <InputMessage
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onClick={() => handleSendMessage()}
        />
      </InputWrapper>
    </PageTemplateWrapper>
  );
};
