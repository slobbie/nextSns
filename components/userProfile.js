import { Avatar, Card, Button } from 'antd'
import React, {useCallback}  from 'react'
import styled from 'styled-components'


const dummy = {
  nickname: 'slobbie',
  Posts: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

const UserProfile = ({setIsLoggedIn}) => {

  const onLogOut = useCallback(() => {
    setIsLoggedIn(false)
  }, [])
  return (
    <Card
      actions={[
        <div key="twit">멍멍<br />{dummy.Posts.length}</div>,
        <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
        <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
      ]}
    >
      <CardView
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
      <LogOutButton onClick={onLogOut}>로그아웃</LogOutButton>
    </Card>
  );
};

export default UserProfile;

const LogOutButton = styled(Button)`
 margin-top: 20px;
`

const CardView = styled(Card.Meta)`
  display: flex;
  align-items: center;
`