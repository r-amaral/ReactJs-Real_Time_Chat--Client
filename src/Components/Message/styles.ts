import styled from "styled-components";

interface StyleProps {
  localUser: boolean;
  isHover: boolean;
}

export const MessageWrapper = styled.div<{ localUser: boolean }>`
  display: flex;
  flex-direction: column;
  width: max-content;
  gap: 10px;
  align-self: ${({ localUser }) => (localUser ? "flex-end" : "flex-start")};
`;

export const MessageHeaderItem = styled.span`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: #e1e1e6;
`;

export const MessageHeaderContainer = styled.div<{ localUser: boolean }>`
  align-self: ${({ localUser }) => (localUser ? "flex-end" : "flex-start")};
`;

export const MessageText = styled.span<StyleProps>`
  font-weight: 400;
  font-size: 16px;
  color: #e1e1e6;
  padding: 14px;
  max-width: 40vw;
  position: relative;
  transition: all 300ms ease-in-out 0s;

  background: ${({ localUser }) => (localUser ? "#07847E" : "#633BBC")};
  border-radius: ${({ localUser }) =>
    localUser ? " 8px 8px 0px 8px" : "0px 8px 8px 8px"};
  overflow: hidden;
  padding-right: ${({ isHover }) => (isHover ? "35px" : "14px")};
`;

export const IconContainer = styled.div<{ isHover: boolean }>`
  top: 0;
  right: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 300ms ease-in-out 0s;

  background: rgba(255, 0, 0, 0.5);
  height: 100%;
  width: 30px;
  cursor: pointer;
`;

export const ModalIcon = styled.img`
  width: 18px;
  height: 18px;
`;
