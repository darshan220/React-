import './App.css';
import Form from './component/Forms'
import LifeCycleA from './component/LifeCycleA';
import LifeCycleB from './component/LifiCycleB';
import OrderComponent from './component/OrderComponent';
import Composition from './component/Composing';

function App() {
  return (
    <div className="App">
      {/* <h1>React Practicals</h1> */}

      {/* <Form/> */}
      {/* <LifeCycleA/> */}
      {/* <LifeCycleB/> */}
      {/* <OrderComponent/> */}
      <h1>STUDENT DETAILS</h1>
      <Composition name="Darshan" roll={6009} class="A" email="dan@gmail.com"/>
      <Composition name="Hitesh" roll={7001} class="B" email="hitesh@gmail.com"/>
      <Composition name="Sahil" roll={5001} class="S" email="sahil@gmail.com"/>


    </div>
  );
}

export default App;
