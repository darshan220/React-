import './App.css';
import HomeContainer from './containers/Containers'
// import Home from './components/Home';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <HomeContainer/>
    </div>
  );
}

export default App;
