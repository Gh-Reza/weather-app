import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Details from './pages/Details';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
