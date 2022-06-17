import React from "react";
import { UserInfoCard } from "../components/cards/UserInfo";

import { Container } from "../components/containers";
import TwoColGrid from "../components/containers/TwoColGrid";
import { Button } from "../components/controls";
import { MainHeadline } from "../components/typography/headings";
import { Info } from "../components/typography/info";
import { useAppDispatch, useAppSelector } from "../hooks/store.hooks";
import { getUser } from "../store/user.slice";

const Home = () => {
  const dispatch = useAppDispatch();
  const userList = useAppSelector((state) => state.userList);

  return (
    <Container>
      <MainHeadline>Felix Media | Landing Page</MainHeadline>
      <div style={{ marginTop: 12 }}>
        <Button onClick={() => dispatch(getUser())}>Add Random User</Button>
      </div>
      <p>All users</p>
      <TwoColGrid>
        {userList.length > 0 ? (
          userList.map((user) => <UserInfoCard user={user} enableRemoval />)
        ) : (
          <Info>No users found yet</Info>
        )}
      </TwoColGrid>
    </Container>
  );
};

export default Home;
