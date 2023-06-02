import { Socket } from "socket.io-client";
import React, { createContext, useContext } from "react";

import { PayloadProps } from "../Interfaces";

interface RoomProviderProps {
  children: React.ReactNode;
}

interface RoomContextProps {
  author: string;
  setAuthor(e: string): void;
  message: string;
  setMessage(e: string): void;
  messages: PayloadProps[];
  setMessages(e: PayloadProps[]): void;
  socketIORef: React.MutableRefObject<Socket | any>;
}

const RoomContext = createContext({} as RoomContextProps);

const RoomProvider = ({ children }: RoomProviderProps) => {
  const socketIORef = React.useRef();

  const [author, setAuthor] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");
  const [messages, setMessages] = React.useState<PayloadProps[]>([]);

  return (
    <RoomContext.Provider
      value={{
        author,
        setAuthor,
        message,
        setMessage,
        messages,
        setMessages,
        socketIORef,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

function useRoomData(): RoomContextProps {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error("useRoomData must be used within an RoomProvider");
  }
  return context;
}

export { RoomProvider, useRoomData };
