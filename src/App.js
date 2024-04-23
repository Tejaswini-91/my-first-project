import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './Redux/counterSlice'
import Counter from './Redux/counter';


function App() {

  return (
    <>
    <div style={{ padding: '10px' }}>
      <h1>Creating Increament and Decrement buttons using Redux</h1>
    </div>
    <div>
      <Counter/>
    </div>
    </>
  );
}

export default App;