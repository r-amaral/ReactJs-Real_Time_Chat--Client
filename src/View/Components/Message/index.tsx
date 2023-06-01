import {
  MessageHeaderContainer,
  MessageHeaderItem,
  MessageText,
  MessageWrapper,
} from "./styles";

interface MessageProps {
  user: boolean;
  time?: string;
  name: string;
  message: string;
}

const Message = ({ user, time, name, message }: MessageProps) => (
  <MessageWrapper localUser={user}>
    <MessageHeaderContainer localUser={user}>
      <MessageHeaderItem>
        {name} - {time}
      </MessageHeaderItem>
    </MessageHeaderContainer>
    <MessageText localUser={user}>{message}</MessageText>
  </MessageWrapper>
);

export default Message;
