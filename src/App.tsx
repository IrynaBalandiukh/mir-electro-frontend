import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { UsersPage } from './pages/UsersPage';

import './App.scss';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/users" element={<UsersPage />}/>
      </Routes>
  );
}

export default App;
