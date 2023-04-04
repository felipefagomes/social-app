import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Posts from './components/Posts';
import Home from './pages/Home.js'
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navbar'>
        <Link to='/' className='links'>Home Page</Link>
        <Link to='createpost' className='links'>Create a Post</Link>
        </div>
        <Routes>
          <Route path='/' exact element={ <Home />} />
          <Route path='/createpost' element={ <CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
