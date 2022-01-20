import './App.css'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {Home} from './pages/Home/Home'
import {Register} from './pages/Register/Register'
import {Login} from './pages/Login/Login'
import {useContext, useEffect, useState} from 'react'
import {Context} from './authContext/authContext'
function App() {
  const [auth,setAuth]=useState(false);
  const {user} = useContext(Context);
  useEffect(() => {
    user ===null ? setAuth(false) : setAuth(true)
  }, [user,auth])
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {auth? <Home/>: <Redirect to='/login'/>}
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
