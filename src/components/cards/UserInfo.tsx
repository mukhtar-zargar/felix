import styled from "styled-components";
import { IUser } from "../../types/user.types";

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  background-color: ${({ theme }) => theme.colors.neutral2};
  box-shadow: 0px 3px 8px -5px #313131;
  padding: ${({ theme }) => theme.spacing.l};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const DetailsContainer = styled.div`
  margin-left: ${({ theme }) => theme.spacing.s};
  flex: 2;
`;

const StyledImg = styled.img`
  width: 120px;
  height: auto;
  border-radius: 50%;
`;

const Text = styled.p`
  margin: 0;
`;

const CardHeadline = styled(Text)`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 15;
`;

const CardInfo = styled(Text)`
  font-weight: lighter;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.foreground};
`;

interface UserInfoCardProps {
  user: IUser;
}

export function UserInfoCard({ user }: UserInfoCardProps) {
  return (
    <CardContainer>
      <ImgContainer>
        <StyledImg src={user.picture} alt="profile_pic" />
      </ImgContainer>
      <DetailsContainer>
        <CardHeadline>
          {user.name}&nbsp;
          <CardInfo>[{user.gender?.substring(0, 1)?.toUpperCase()}]</CardInfo>
        </CardHeadline>
        <CardInfo>{user.email}</CardInfo>
        <CardInfo>{user.address}</CardInfo>
      </DetailsContainer>
    </CardContainer>
  );
}
