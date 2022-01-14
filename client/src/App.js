import './App.css'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import {useState} from 'react'
import {Home} from './pages/Home/Home'
import {Register} from './pages/Register/Register'
import {Login} from './pages/Login/Login'
function App() {
  const [auth,setAuth]=useState(false)
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
