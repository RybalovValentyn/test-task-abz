import style from './App.module.scss';
import { AppBar } from './Components/AppBar/AppBar';
import {Hero} from './Components/Hero/Hero';
import {WorkGet} from './Components/WorkGet/WorkGet';
import {WorkPost} from './Components/WorkPost/WorkPost';

function App() {
  return (
    <div className={style.App}>
<AppBar/>
<Hero/>
<WorkGet/>
<WorkPost/>
    </div>
  );
}

export default App;
