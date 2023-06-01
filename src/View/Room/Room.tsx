import React from "react";
import * as uuid from "uuid";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";

import { timeFormart } from "../../utils";
import { useRoomData } from "../../Context";
import Message from "../../Components/Message";
import Profile from "../../Components/Profile";
import { PayloadProps } from "../../Interfaces";
import InputMessage from "../../Components/InputMessage";
import PageTemplateWrapper from "../../Components/PageTemplate";

import * as S from "./styles";

export const Room = () => {
  const port = 3001;
  const listRef = React.useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const { author, message, setMessage, messages, setMessages, socketIORef } =
    useRoomData();

  const userId = React.useMemo(() => uuid.v4(), []);

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
    socketIORef.current = io(`http://localhost:${port}`, {
      query: { name: author, userId },
    });
    socketIORef.current.on("connect", () => console.log("conectado"));
    socketIORef.current!.on("msgToClient", (message: PayloadProps) =>
      receivedMessage(message)
    );
  };

  const handleDisconect = () => {
    socketIORef.current?.disconnect();
    navigate("/");
  };

  React.useEffect(() => {
    if (!author) navigate("/");

    connectionSocket();
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <PageTemplateWrapper>
      <S.ProfileWrapper>
        <Profile profileName={author} />
        <S.ProfileLeave onClick={handleDisconect}>Leave</S.ProfileLeave>
      </S.ProfileWrapper>
      <S.MessagesWrapper ref={listRef}>
        {messages.map((message) => (
          <Message
            key={message.id}
            user={message.author === author}
            name={message.author}
            time={message.time}
            message={message.message}
          />
        ))}
      </S.MessagesWrapper>
      <S.InputWrapper>
        <InputMessage
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onClick={() => handleSendMessage()}
        />
      </S.InputWrapper>
    </PageTemplateWrapper>
  );
};
