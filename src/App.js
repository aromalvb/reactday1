import logo from './logo.svg';
import './App.css';

import { Registration } from './components/Registration';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Statebasics from './components/Statebasics';
import { Counter } from './components/Counter';
import UseE from './components/UseE';
import Viewdata from './components/Viewdata';
function App() {
  return (
    <div className="App">
      {/*  Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Registration/>}/>
  </Routes> */}
      {/* <Statebasics/> */}
      { /* Counter/> */}
       {/*  <UseE/>  */}
       <Viewdata></Viewdata>
    </div>
  );
}

export default App;
