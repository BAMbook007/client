import React from 'react';
import { useState } from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { useContext } from 'react';
import { Context } from '../index';


const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {store} = useContext(Context);

  return (
    <div className='box'>
      <div className='auth'>
      <div>IIEM SOCIAL NETWORK</div>
      <MyInput value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Введите email..." />
      <MyInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Введите пароль..." />
      <MyButton onClick={() => store.registration(email, password)}>Регистрация</MyButton>
      <MyButton onClick={() => store.login(email, password)}>Войти</MyButton>
      <MyButton onClick={() => store.logout()}>Выйти</MyButton>
    </div>
    </div>
    
  );
};

export default Auth;