import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [state, setstate] = useState('white')

  const themeChange = () => {
    if(state=='white')
      setstate('#191D28')
    else
      setstate('white')
  }
  return (
    <div className="App" style={{backgroundColor: state}} >
      <Header themeChange={themeChange} state={state} />
      <Main state={state}/>
      <Footer state={state}/>
    </div>
  );
}

export default App;