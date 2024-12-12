import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'; // Changed this line
import './App.css'
import Line from './components/Line'
import Content from './components/Content'
import Apps from './components/Apps' // Make sure the path is correct
import Footers from './components/Footers';
import Rights from './components/Rights';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" 
          element=
           {<>  
            <Content />
            <Rights />
            <Line />
            <Footers />

            </>} 
            />
        <Route path="/app" 
          element=
          {
            <Apps />} 
          />
      </Routes>
    </Fragment>
    )
}

export default App;