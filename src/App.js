import './App.css';
import { Routes, Route} from 'react-router-dom'
import StarshipList from './Starships/StarshipList';

function App() {
  return (
    <>
      <div className='header'>
        <h1>Starships</h1>
      </div>
      <Routes>
        <Route path="/" element={<StarshipList/>}/>
      </Routes>
    </>
  );
}

export default App;
