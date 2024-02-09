import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementByAmount, incrementByAmount } from './app/reducer/CounterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector(state => state.counter.value)
  const [amount, setAmount] = useState();

  const dispatch = useDispatch()
  return (
    <div className='App'>
      <input type='text' value={amount}
          onChange={e => setAmount(e.target.value)}></input>
      <h1>{count}</h1>
      
        <button onClick={() => dispatch(incrementByAmount(Number(amount) || 0)) }>Increment</button>
        <button onClick={() => dispatch(decrementByAmount(Number(amount) || 0)) }>Decrement</button>
    </div>
  );
}

export default App;
