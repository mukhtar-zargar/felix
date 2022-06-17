import React from "react";

import { UserInfoCard } from "../components/cards/UserInfo";
import { Container } from "../components/containers";
import { MainHeadline } from "../components/typography/headings";
import { useAppSelector } from "../hooks/store.hooks";

const Profile: React.FC = () => {
  const user = useAppSelector((state) => state.user);

  return (
    <Container>
      <MainHeadline>Felix Media | Profile Page</MainHeadline>

      {user.name && <p>Welcome</p>}

      {user.name && <UserInfoCard user={user} />}
    </Container>
  );
};

export default Profile;
