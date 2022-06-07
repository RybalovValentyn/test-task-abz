import {Section} from '../Section/Section';
import s from './workGet.module.scss';
import {Button} from "../Button/Button";
import {Card} from './Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import {incrementPage} from '../../redux/reducer';
import {usersShowMoreThunk} from '../../redux/asyncthunc';

export function WorkGet() {
    const dispatch = useDispatch();
    const users = useSelector((state => state.auth.users));
    const isAuth = useSelector((state => state.auth.isAuth));
    const isLoad = useSelector((state => state.auth.isLoading));
    const isEnd = useSelector((state => state.auth.page)) >= useSelector((state => state.auth.totalPages));     
    

const filteredUser = [...users]?.sort((usera, userb) => {
   return (userb.registration_timestamp - usera.registration_timestamp )
});

    const onClickUsers = ()=>{
        dispatch(incrementPage())
       dispatch(usersShowMoreThunk())
    }
return (
    <Section>
        <h2 className={s.heading}>
        Working with GET request
        </h2>
<ul className={s.Container}>
    {filteredUser?.map((user) => (
        <Card key={user.id} user={user}/>
    ))  }
</ul>
    <Button type={'button'} className='button' onClick={onClickUsers} name={'Show more'} disabled={!isAuth || isLoad || isEnd}/ >

</Section>
)
}
