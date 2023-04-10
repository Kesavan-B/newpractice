import React from 'react'
import { useDispatch,useSelector} from 'react-redux'
import { add } from '../redux/Action'

function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state)
    console.log(counter)
  return (
    <div>
       <p>{counter}</p> 
      <button onClick={()=>dispatch(add(1))}>Add</button>

      <button>Sub</button>
    </div>

  )
}

export default Counter
