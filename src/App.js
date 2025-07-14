import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App=()=>{
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" key="general"  element={<News category="general"/>} />
          <Route exact path="/business" key="business" element={<News category="business"/>} />
          <Route exact path="/entertainment" key="entertainment" element={<News category="entertainment"/>} />
          <Route exact path="/health" key="health" element={<News category="health"/>} />
          <Route exact path="/science" key="science" element={<News category="science"/>} />
          <Route exact path="/sports" key="sports" element={<News category="sports"/>} />
          <Route exact path="/technology" key="technology" element={<News category="technology"/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;