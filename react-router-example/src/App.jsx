import './App.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/om', { state: { name: 'Christoffer' } });
  }

  return (
    <div className="App">
      <h1>Detta är startsidan</h1>
      <button onClick={ handleClick }>Skicka till om-sidan</button>
    </div>
  )
}

export default App
