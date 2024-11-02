import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setCount } from "./redux/counter-slice";
import { Form } from "./components/form";
import { Card } from "./components/card";

function App() {
  const { count } = useSelector((state) => state.counter);
  const { taskList } = useSelector((state) => state.task)
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        {/* <div>
          <h1>{count}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(setCount(100))}>100</button>
        </div> */}
        <Form />
        <div>
          {taskList?.map((item) => (
            <Card key={item.id} {...item}/>
          ))}
        </div>

      </div>

    </>
  )
}

export default App
