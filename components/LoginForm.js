import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

import useInput from '../hooks/useInput';

import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput('');
  const [pwd, onChangePwd] = useInput('');

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction({ id, pwd }));
  }, [id, pwd]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name='user-id' value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <br />
        <Input
          name='user-password'
          value={pwd}
          onChange={onChangePwd}
          type='password'
          required
        />
      </div>
      <ButtonWrapper style={{ marginTop: '10px' }}>
        <Button type='primary' htmlType='submit' loading={false}>
          로그인
        </Button>
        <Link href='/signup'>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const FormWrapper = styled(Form)`
  padding: 10px;
`;
