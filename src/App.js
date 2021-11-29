import './App.css';
import { useNavigate } from 'react-router-dom';


function App() {
  const lasagna = useNavigate();
  return (
    <div className="App">
     <h1>Here's the App component, y'all!</h1>
     <button style={{marginTop: '30px'}}
     onClick={() => {lasagna(-1)}}
     type="button" class="btn btn-info" data-toggle="button" aria-pressed="false" autocomplete="off">
  Back To Learn
</button>    </div>
  );
}

export default App;
