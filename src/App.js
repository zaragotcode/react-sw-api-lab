import './App.css';
import { Routes, Route} from 'react-router-dom'
import StarshipList from './Starships/StarshipList';
import StarshipPage from './Starships/StarshipPage';

function App() {
  return (
    <>
      <div className='header'>
        <h1>Starships</h1>
      </div>
      <Routes>
        <Route path="/" element={<StarshipList/>}/>
        <Route path="/starship" element={<StarshipPage />} />
      </Routes>
    </>
  );
}

export default App;
