import styled from "styled-components";

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ProfileName = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #e1e1e6;
`;

export const ProfileStatus = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;

  font-weight: 400;
  font-size: 12px;
  color: #00b37e;
`;

export const ProfileBall = styled.div`
  width: 8px;
  height: 8px;
  background: #00b37e;
  border-radius: 100%;
`;
