import './App.css';
import Count from './component/Count'
import Clock from './component/Clock';
import Click from './component/Clickevent'
import ClassClick from './component/ClassClick';
import EventBind from './component/Eventbind';
import Parent from './component/parent'
import Homepage from './component/Conditional';
import NameList from './component/List';


function App() {
  return (
    <div className="App">
    
     {/* <div id="clock"> </div>

     <Count/>

     <Click/>
     <ClassClick/>

    <EventBind/>

    <Parent/>  */}

    <Homepage/>

    {/* <NameList/> */}

    
    </div>
  );
}

export default App;
