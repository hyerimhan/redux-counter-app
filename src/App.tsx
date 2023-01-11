import "./App.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./reducers";

type Props = {
  onIncrement: () => void;
  onDecrement: () => void;
};

function App({ onIncrement, onDecrement }: Props) {
  const [todoValue, setTodoValue] = useState("");
  const counter = useSelector((state: RootState) => state.counter);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const addTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setTodoValue("");
  };

  return (
    <div className="App">
      {/* <p>
        Clicked: {value} times <br />
        <button onClick={onIncrement}>+</button>{" "}
        <button onClick={onDecrement}>-</button>
      </p> */}
      <form onSubmit={addTodo}>
        <input type="text" value={todoValue} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
