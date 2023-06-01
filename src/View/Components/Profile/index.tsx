import React from "react";
import DogImg from "../../../assets/dog.jpg";
import {
  ProfileBall,
  ProfileContent,
  ProfileImage,
  ProfileName,
  ProfileStatus,
  ProfileWrapper,
} from "./styles";

interface ProfileProps {
  profileName: string;
}

const Profile = ({ profileName }: ProfileProps) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={DogImg} />
      <ProfileContent>
        <ProfileName>{profileName}</ProfileName>
        <ProfileStatus>
          <ProfileBall />
          Online
        </ProfileStatus>
      </ProfileContent>
    </ProfileWrapper>
  );
};

export default Profile;
