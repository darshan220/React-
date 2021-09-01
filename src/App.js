
import './App.css';
import Greet from './components/greet';
import Message from './components/message';
import Hello from './components/jsx'

function App() {
  return (
    <div className="App">
        
        <Greet name="luffy">
          <p>Parent child</p>
        </Greet>

        <Greet name="Saitama">
            <button>Parent child</button>
        </Greet>

        <Message/>
        
        <div id="root2" />
    </div>

    
  );
}

export default App;
