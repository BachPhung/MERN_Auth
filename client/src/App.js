import './App.css'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {useState} from 'react'
import {Home} from './pages/Home/Home'
import {Register} from './pages/Register/Register'
import {Login} from './pages/Login/Login'
import {useContext} from 'react'
import {Context} from './authContext/authContext'
function App() {
  const [auth,setAuth]=useState(false)
  const {user} = useContext(Context)
  console.log(user);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {auth? <Home/>: <Redirect to='register'/>}
          </Route>
          <Route path='/register'>
            {!auth? <Register/>: <Redirect to='/'/>}
          </Route>
          <Route path='/login'>
            {!auth? <Login/>:<Redirect to='/'/>}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
