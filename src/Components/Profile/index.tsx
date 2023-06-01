import * as S from "./styles";
import DogImg from "../../assets/dog.jpg";
import { ProfileProps } from "../../Interfaces";

const Profile = ({ profileName }: ProfileProps) => (
  <S.ProfileWrapper>
    <S.ProfileImage src={DogImg} />
    <S.ProfileContent>
      <S.ProfileName>{profileName}</S.ProfileName>
      <S.ProfileStatus>
        <S.ProfileBall />
        Online
      </S.ProfileStatus>
    </S.ProfileContent>
  </S.ProfileWrapper>
);

export default Profile;
