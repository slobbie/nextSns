import React from 'react';
import Head from "next/head";
import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: 'slobbie' }, { nickname: '멍멍' }, { nickname: '감자' }];
  const followingList = [{ nickname: 'slobbie' }, { nickname: '멍멍' }, { nickname: '감자' }];

  return (
   <>
     <Head>
        <title>내 프로필 | Sns </title>
     </Head>
     <AppLayout>
       <NicknameEditForm />
        <FollowList
          header="팔로잉 목록"
          data={followingList}
        />
        <FollowList
          header="팔로워 목록"
          data={followerList}
        />
      </AppLayout>
   </>
  );
};

export default Profile;