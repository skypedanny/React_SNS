import React, { useState } from "react";
import AppLayout from "components/AppLayout";

import Head from 'next/head';
import { Form, Input, Checkbox, Button } from "antd";

const signup = () => {
  const [id, setId] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);

  const onSubmit = () => {};
  const onChangeId = (e) => {
      setId(e.target.value);
  };
  const onChangeNick = (e) => {
      setNick(e.target.value);
  };
  const onChangePassword = (e) => {
      setPassword(e.target.value);
  };
  const onChangePasswordChk = (e) => {
      setPasswordCheck(e.target.value);
  };
  const onChangeTerm = (e) => {
      setTerm(e.target.value);
  };

  return (
    <>
      <Head>
        <title>SNS</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.1/antd.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.0.1/antd.min.js" />
      </Head>

      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 12, alignItems: "center" }}>
            <div>
                <label htmlFor="user-id">ID</label>
                <br />
                <Input name="user-id" value={id} required onChange={onChangeId} /> 
            </div>

            <div>
                <label htmlFor="user-nick">NickName</label>
                <br />
                <Input name="user-nick" value={nick} required onChange={onChangeNick} /> 
            </div>

            <div>
                <label htmlFor="user-password">Password</label>
                <br />
                <Input name="user-password" type="password" value={password} required onChange={onChangePassword} /> 
            </div>

            <div>
                <label htmlFor="user-password-check">Re Password</label>
                <br />
                <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} /> 
            </div>

            <div>
                <Checkbox name="user-term" value={term} onChange={onChangeTerm}>'이대훈'이 잘생겼다고 생각하면 체크하십시오.</Checkbox>
            </div>

            <div>
                <Button type="primary" htmlType="submit">Send</Button>
            </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default signup;
