import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const App=()=>{
  const apiKey=process.env.REACT_APP_LINK;
  const[pageSize,setPageSize]=useState(1);
  const [isInfiniteScroll, setIsInfiniteScroll] = useState(false);
  return (
    <div>
      <Router>
        <Navbar setPageSize={setPageSize} isInfiniteScroll={isInfiniteScroll}
  setIsInfiniteScroll={setIsInfiniteScroll} />
        <Routes>
          <Route exact path="/" key="general"  element={<News category="general" apiKey={apiKey} pageSize={pageSize} isInfiniteScroll={isInfiniteScroll} />} />
          <Route exact path="/business" key="business" element={<News category="business" apiKey={apiKey} pageSize={pageSize} isInfiniteScroll={isInfiniteScroll} />} />
          <Route exact path="/entertainment" key="entertainment" element={<News category="entertainment" apiKey={apiKey} pageSize={pageSize} isInfiniteScroll={isInfiniteScroll} />} />
          <Route exact path="/health" key="health" element={<News category="health" apiKey={apiKey} pageSize={pageSize} isInfiniteScroll={isInfiniteScroll} />} />
          <Route exact path="/science" key="science" element={<News category="science" apiKey={apiKey} pageSize={pageSize} isInfiniteScroll={isInfiniteScroll} />} />
          <Route exact path="/sports" key="sports" element={<News category="sports" apiKey={apiKey} pageSize={pageSize} isInfiniteScroll={isInfiniteScroll} />} />
          <Route exact path="/technology" key="technology" element={<News category="technology" apiKey={apiKey} pageSize={pageSize} isInfiniteScroll={isInfiniteScroll} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;