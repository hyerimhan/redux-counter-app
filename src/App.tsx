import "./App.css";

type Props = {
  value: number;
};

function App({ value }: Props) {
  return (
    <div className="App">
      <p>
        Clicked: {value} times
        <button>+</button> <button>-</button>
      </p>
    </div>
  );
}

export default App;
