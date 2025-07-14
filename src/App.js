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
  const apiKey=process.env.REACT_APP_LINK;
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" key="general"  element={<News category="general" apiKey={apiKey} />} />
          <Route exact path="/business" key="business" element={<News category="business" apiKey={apiKey} />} />
          <Route exact path="/entertainment" key="entertainment" element={<News category="entertainment" apiKey={apiKey} />} />
          <Route exact path="/health" key="health" element={<News category="health" apiKey={apiKey} />} />
          <Route exact path="/science" key="science" element={<News category="science" apiKey={apiKey} />} />
          <Route exact path="/sports" key="sports" element={<News category="sports" apiKey={apiKey} />} />
          <Route exact path="/technology" key="technology" element={<News category="technology" apiKey={apiKey} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;