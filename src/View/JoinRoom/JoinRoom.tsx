import React from "react";
import * as uuid from "uuid";
import { useRoomData } from "../../Context";
import { useNavigate } from "react-router-dom";
import PageTemplate from "../../Components/PageTemplate";
import { ButtonJoinRoom, JoinRoomInput, JoinRoomWrapper } from "./styles";

export const JoinRoom = () => {
  const navigate = useNavigate();
  const { author, setAuthor, socketIORef } = useRoomData();

  const joinRoom = () => {
    if (!author) {
      const joined = {
        id: uuid.v4(),
        author,
      };

      socketIORef.current?.emit("joined-room", joined);
      setAuthor(joined.author);
    }
    navigate("/chat");
  };

  React.useEffect(() => {
    if (author) {
      setAuthor("");
    }
  }, []);

  return (
    <PageTemplate>
      <JoinRoomWrapper>
        <JoinRoomInput
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter name..."
        />
        <ButtonJoinRoom onClick={joinRoom}>Join Room</ButtonJoinRoom>
      </JoinRoomWrapper>
    </PageTemplate>
  );
};
