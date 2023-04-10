import React from "react";
import "./App.css";
import { useSelector,useDispatch} from "react-redux";
import { addAction, subAction, valueSelector } from "./redux/slice/Index";

function App() {
  const a = useSelector(valueSelector);
  const dispatch = useDispatch()
  console.log(a);
  return(
    <div>
      <h1>{a.adder.value}</h1>
      <button onClick={()=> dispatch(addAction())}>add</button>
      <button onClick={()=> dispatch(subAction(5))}>sub</button>
    </div>
  )
 
}

export default App;
