import React from "react";
import * as S from "./styles";
import DelIcon from "../../assets/lixeira.jpeg";
import { MessageProps } from "../../Interfaces";

const Message = ({
  id,
  user,
  time,
  name,
  message,
  deleteMessage,
}: MessageProps) => {
  const [hovered, setHovered] = React.useState<boolean>(false);

  const handleHover = () => {
    if (user) {
      setHovered(!hovered);
    }
  };

  return (
    <S.MessageWrapper localUser={user}>
      <S.MessageHeaderContainer localUser={user}>
        <S.MessageHeaderItem>
          {name} - {time}
        </S.MessageHeaderItem>
      </S.MessageHeaderContainer>
      <S.MessageText
        localUser={user}
        isHover={hovered}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        {message}
        {hovered && (
          <S.IconContainer isHover={hovered} onClick={() => deleteMessage(id)}>
            <S.ModalIcon src={DelIcon} />
          </S.IconContainer>
        )}
      </S.MessageText>
    </S.MessageWrapper>
  );
};
export default Message;
