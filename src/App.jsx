import React from 'react';
import Home from './components/Home';
import DetailedCard from './components/DetailedCard';
import { useSelector } from 'react-redux';


function App() {
const status = useSelector(state => state.counter.productStatus)
console.log(status);
  return (
    <>
      <Home/>
      <DetailedCard display={status}/>
    </>
  );
}

export default App;
