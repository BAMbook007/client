import React from 'react';
import { useState } from 'react';
import { registration } from '../components/actions/user';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { useDispatch } from 'react-redux/es/exports';
import {login} from "../components/actions/user"
import { logout } from '../components/reducers/userReducer';

const Auth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  return (
    <div className='box'>
      <div className='auth'>
      <div>IIEM SOCIAL NETWORK</div>
      <MyInput value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Введите email..." />
      <MyInput value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Введите пароль..." />
      <MyButton onClick={() => registration(email, password)}>Регистрация</MyButton>
      <MyButton onClick={() => dispatch(login(email, password))}>Войти</MyButton>
      <MyButton onClick={() => dispatch(logout())}>Выйти</MyButton>
    </div>
    </div>
    
  );
};

export default Auth;