import styled from "styled-components";

export const MessageWrapper = styled.div<{ localUser: boolean }>`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 10px;
  align-self: ${({ localUser }) => (localUser ? "flex-end" : "flex-start")};
`;

export const MessageHeaderItem = styled.span`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #e1e1e6;
`;

export const MessageHeaderContainer = styled.div<{ localUser: boolean }>`
  align-self: ${({ localUser }) => (localUser ? "flex-end" : "flex-start")};
`;

export const MessageText = styled.span<{ localUser: boolean }>`
  font-weight: 400;
  font-size: 12px;
  color: #e1e1e6;
  padding: 14px;

  background: ${({ localUser }) => (localUser ? "#07847E" : "#633BBC")};
  border-radius: ${({ localUser }) =>
    localUser ? " 8px 8px 0px 8px" : "0px 8px 8px 8px"};
`;
