import logo from '../../images/Logo.svg';
import s from './logo.module.scss';

export const Logo = () =>{
    return(
        <div className={s.logo}>
          <img src={logo} alt='logo' width='26' height='26' />
        </div>
    )
}