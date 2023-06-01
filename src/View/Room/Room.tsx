import React from "react";
import PageTemplateWrapper from "../Components/PageTemplate";
import InputMessage from "../Components/InputMessage";
import Message from "../Components/Message";
import { InputWrapper, MessagesWrapper, ProfileWrapper } from "./styles";
import Profile from "../Components/Profile";

import io, { Socket } from "socket.io-client";
import * as uuid from "uuid";

interface PayloadProps {
  id?: string;
  author: string;
  message: string;
  time?: string;
  room?: string;
}

export const Room = () => {
  const port = 3001;

  const socketIORef = React.useRef<Socket>();
  const listRef = React.useRef<HTMLDivElement>(null);

  const [author, setAuthor] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState<PayloadProps[]>([]);

  const handleSendMessage = async () => {
    if (author && message) {
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

  const joinRoom = () => {
    if (!author) {
      const joined = {
        id: uuid.v4(),
        author,
      };

      socketIORef.current?.emit("joined-room", joined);
      setAuthor(joined.author);
    }
  };

  const timeFormart = () => {
    const time = new Date();
    const hour = time.getHours();
    const min = time.getMinutes();

    return (hour < 10 ? "0" + hour : hour) + ":" + (min < 10 ? "0" + min : min);
  };

  React.useEffect(() => {
    socketIORef.current = io(`http://localhost:${port}`);
    socketIORef.current.on("connect", () => {
      console.log("conectado");
    });

    socketIORef.current.on("msgToClient", (message: PayloadProps) =>
      receivedMessage(message)
    );
  }, [socketIORef, messages, author, message]);

  React.useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <PageTemplateWrapper>
      <div>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter name..."
        />
        <button onClick={joinRoom}>join</button>
      </div>
      <ProfileWrapper>
        <Profile profileName={author} />
      </ProfileWrapper>
      <MessagesWrapper ref={listRef}>
        {messages.map((message) => (
          <Message
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
          onClick={() => {
            handleSendMessage();
          }}
        />
      </InputWrapper>
    </PageTemplateWrapper>
  );
};
