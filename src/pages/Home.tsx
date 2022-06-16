import React from "react";
import { UserInfoCard } from "../components/cards/UserInfo";

import { Container } from "../components/containers";
import { Button } from "../components/controls";
import { MainHeadline } from "../components/typography/headings";
import { useAppDispatch, useAppSelector } from "../hooks/store.hooks";
import { getUser } from "../store/user.slice";

const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  return (
    <Container marginTop="xxxl">
      <MainHeadline>Felix Media | Home Page</MainHeadline>
      {user.name && <p>Welcome {user.name}!!</p>}

      {user.name && <UserInfoCard user={user} />}
      <div style={{ marginTop: 12 }}>
        <Button onClick={() => dispatch(getUser())}>Random</Button>
      </div>
    </Container>
  );
};

export default Home;
