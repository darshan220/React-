import './App.css';
import HigherOrdered from './component/higherOrdercomponent/higherOrdered';
import User from './component/Render props/user';
import Hooks from './component/Hooks/hooks';

function App() {
  return (
    <div className="App">
        <HigherOrdered name='Item ' id='1 '/>
        <User name={(isLoggedIn) => isLoggedIn ? 'darshan' : 'Guest'}/>
        <br/>
        <Hooks/>
    </div>
  );
}

export default App;
