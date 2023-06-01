import styled from "styled-components";

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding-right: 2%;
  overflow: auto;
  max-height: calc(80vh - 82px);

  ::-webkit-scrollbar {
    padding-left: 10px;
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(64, 37, 122);
    border-radius: 88px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: rgb(91, 58, 161);
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 10vh;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  max-height: 10vh;
`;

export const ProfileLeave = styled.span`
  color: white;
  cursor: pointer;
  transition: all 300ms ease-in-out 0s;
  font-weight: 500;
  &:hover {
    color: rgb(91, 58, 161);
  }
`;
