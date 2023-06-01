import * as S from "./styles";
import { MessageProps } from "../../Interfaces";

const Message = ({ user, time, name, message }: MessageProps) => (
  <S.MessageWrapper localUser={user}>
    <S.MessageHeaderContainer localUser={user}>
      <S.MessageHeaderItem>
        {name} - {time}
      </S.MessageHeaderItem>
    </S.MessageHeaderContainer>
    <S.MessageText localUser={user}>{message}</S.MessageText>
  </S.MessageWrapper>
);

export default Message;
