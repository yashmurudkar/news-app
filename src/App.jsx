import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import.meta.env.REACT_APP_NEWS_API
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0)
  const apiKey = import.meta.env.REACT_APP_NEWS_API
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3}
        />
        <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} key='general' apiKey={apiKey} category='general' />}></Route>
        <Route exact path='/business' element={<News setProgress={setProgress} key='business' apiKey={apiKey} category='business' />}></Route>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' apiKey={apiKey} category='entertainment' />}></Route>
        <Route exact path='/general' element={<News setProgress={setProgress} key='general' apiKey={apiKey} category='general' />}></Route>
        <Route exact path='/health' element={<News setProgress={setProgress} key='health' apiKey={apiKey} category='health' />}></Route>
        <Route exact path='/science' element={<News setProgress={setProgress} key='science' apiKey={apiKey} category='science' />}></Route>
        <Route exact path='/sports' element={<News setProgress={setProgress} key='sports' apiKey={apiKey} category='sports' />}></Route>
        <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' apiKey={apiKey} category='technology' />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;



