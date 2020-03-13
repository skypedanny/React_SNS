import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

import { Button, Form, Input } from 'antd';
import { useInput } from 'pages/signup'; // TODO: util 폴더로 옮기기
import { loginAction } from 'reducers/user';

const LoginForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(loginAction);
  }, [id, password]);

  return (
    <form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button type="primary" htmlType="submit" loading={false}>Login</Button>
        <Link href="/signup"><a><Button>Signup</Button></a></Link>
      </div>
    </form>
  );
};

export default LoginForm;