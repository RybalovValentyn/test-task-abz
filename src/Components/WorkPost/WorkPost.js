import { Section } from "../Section/Section";
import s from './WorkPost.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import {setName, setEmail, setPhone, resetForm, setPosition} from '../../redux/formSlise';
import { useEffect } from "react";
import {Button} from "../Button/Button";
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {setAvatar} from '../../redux/formSlise';
import {loginThunk} from '../../redux/asyncthunc';

export function WorkPost() {
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(resetForm());
}, [dispatch]);

const nameValue = useSelector(state => state.form.name);
const email = useSelector(state => state.form.email);
const phone = useSelector(state => state.form.phone);
const position = useSelector(state => state.form.position);
const radioBtn = useSelector(state => state.auth.position);
const token = useSelector(state => state.auth.token);
const isAuth = useSelector(state => state.auth.isAuth);

const onClickUsers = (e) =>{
e.preventDefault()
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');
formData.append('position_id', position);
formData.append('name', nameValue);
formData.append('email', email);
formData.append('phone', phone);
formData.append('photo', fileField.files[0]);
formData.append('Token', token);
console.log([...formData][5][1]);
dispatch(loginThunk(formData));
}
const ClickRadioBtn = (e) =>{
dispatch(setPosition(e.target.id))
};

const onFileShange =(e) =>{   
    dispatch(setAvatar(e.target.files[0].name))
}

    return(
<Section >
    <h2 className={s.header}>
    Working with POST request
    </h2>


    <form onSubmit={onClickUsers} className={s.form}>

           <input className={s.input}  type='text' placeholder="Your name" name="name" onChange={(e)=> dispatch(setName(e.target.value))}
        value={nameValue} required minLength={6} ></input>

        <input className={s.input} type='email' placeholder="Email" name="email" onChange={(e)=> dispatch(setEmail(e.target.value))}
        value={email} required ></input>

        <input className={s.input} type='phone' placeholder="Phone" name="phone" pattern='^[\+]{0,1}380([0-9]{9})$'
         onChange={(e)=> dispatch(setPhone(e.target.value))}
        value={phone} required ></input>
        <label className={s.lable}>+38 (XXX) XXX - XX - XX</label>

        <div className={s.formContainer}>
        <p>Select your position</p>
        </div>
<ul className={s.radioInput}>
{radioBtn?.map(({id,name}) => 
(  
    <li key={id}>
            <label>
      <input key={id} id={id} type="radio" name="position" value={name} onChange={ClickRadioBtn} required/>
     {name}
    </label>
    </li>
)
)}
        </ul>
<Form.Group controlId="formFile" className={s.fileinput}>
    <Form.Control type="file" size="lg" onChange={onFileShange}/>
  </Form.Group>
        <Button  type={'submit'} className='button'  name={'Sign up'} disabled={!isAuth} / >
    </form>
</Section>
    )
}