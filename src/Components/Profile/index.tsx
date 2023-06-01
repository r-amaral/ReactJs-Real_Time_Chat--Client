import React from "react";
import * as S from "./styles";
import { profileImage } from "./profileImage";
import { ProfileProps } from "../../Interfaces";

const Profile = ({ profileName }: ProfileProps) => {
  const [img, setImg] = React.useState<string>();

  const getRandomImageProfile = () => {
    const ramdomImage =
      profileImage[Math.floor(Math.random() * profileImage.length)];

    setImg(ramdomImage);
  };

  React.useEffect(() => {
    getRandomImageProfile();
  }, []);

  return (
    <S.ProfileWrapper>
      <S.ProfileImage src={img} />
      <S.ProfileContent>
        <S.ProfileName>{profileName}</S.ProfileName>
        <S.ProfileStatus>
          <S.ProfileBall />
          Online
        </S.ProfileStatus>
      </S.ProfileContent>
    </S.ProfileWrapper>
  );
};
export default Profile;
