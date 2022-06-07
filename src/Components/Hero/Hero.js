import s from './Hero.module.scss'
import { Button } from '../Button/Button'
import {tokenThunk} from '../../redux/asyncthunc';
import { useSelector, useDispatch } from 'react-redux';

export const Hero =() =>{
    const isAuth = useSelector(state => state.auth.isAuth);

    const dispatch = useDispatch();

    const onClickSignUp = () => {
        dispatch(tokenThunk());
    }
    return (
        <section className={s.Hero}>
<div className={s.HeroItem}>
<h1 >Test assignment for front-end developer</h1>
<p >What defines a good front-end developer is 
    one that has skilled knowledge of HTML, CSS,
     JS with a vast understanding of User design
      thinking as they'll be building web interfaces 
      with accessibility in mind. They should also be
       excited to learn, as the world of Front-End 
       Development keeps evolving.</p>
       <Button type={'button'} className='button' onClick={onClickSignUp} name={'Sign up'} disabled={isAuth}/ >
</div>

        </section>
    )
}