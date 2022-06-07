import s from './Card.module.scss';

export function Card(user) {
const defaulPhoto = '../../../images/default.png';
   const {name, email, id, phone, photo = defaulPhoto, position} = user.user
    return (
        <li key={id} className={s.CarContainer}>
        <img src={photo} alt='fhoto User' width='70px' height='70px'/>
        <h3>{name}</h3>
        <ul>
            <li>
               {position}                
            </li>
            <li>
                {email}
            </li>
            <li>
               {phone}
            </li>
        </ul>
        
        </li>
    )
}