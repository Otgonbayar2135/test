
import style from './App.module.css';
import { Login } from './compinent/login/login';
import { Head } from './compinent/header/header';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import { Home } from './compinent/home/home';
import { Create } from './compinent/create/creat';
import { Reg } from './compinent/registration/recisration';
 function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Head />
        <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/Create' element={<Create/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/Reg' element={<Reg/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

