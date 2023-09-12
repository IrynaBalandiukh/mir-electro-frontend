import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { UsersPage } from './pages/UsersPage';

import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/users" element={<UsersPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
