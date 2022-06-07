import {Button} from "../Button/Button";
import s from './AppBar.module.scss';
import { Logo } from "../Logo/Logo";
import '../../sass/components/_button.scss';
import { currentThunk } from "../../redux/asyncthunc";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {tokenThunk, usersThunk} from '../../redux/asyncthunc';

export function AppBar()  {
  const dispatch = useDispatch();
    const isPosition = useSelector(state => state.auth.position);
    const isAuth = useSelector(state => state.auth.isAuth);

 
 const onClickUsers = () => {
  dispatch(usersThunk())
};
const onClickSignUp = () => {
  dispatch(tokenThunk());
};

useEffect(() => {
if (isPosition.length <= 0) {
  dispatch(currentThunk())
}
  }, [dispatch]);
  
    return (  
<header className={s.AppHeader}>
<Logo/>
<div>
<Button type={'button'} className='button' onClick={onClickUsers} name={'Users'} disabled={!isAuth}/ >
<Button type={'button'} className='button' onClick={onClickSignUp} name={'Sign up'} disabled={isAuth}/ >
</div>
  </header>
    );
  };
  
  
  
