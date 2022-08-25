import { Route, Routes } from 'react-router-dom';
import './App.css';

import Landing from './Components/Landing/Landing';
import Table from './Components/Table/Table';
import Form from './Components/Form/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' component={Landing}/>
        <Route path='/table' component={Table}/>
        <Route path='/form' component={Form}/>
      </Routes>
    </div>
  );
}

export default App;
