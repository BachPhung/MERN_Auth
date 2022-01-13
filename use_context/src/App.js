import { Content } from './component/Content';
import './App.css'
import {useContext} from 'react'
import {ThemeContext} from './ThemeContext'


function App() {
  const context = useContext(ThemeContext)
  return (
    <div className="App">
      <button onClick={()=>context.toggleTheme()}>Toggle theme</button>
      <Content/>
    </div>
  );
}

export default App;
