
import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = {
    username: "Ashu",
    age: 25
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind test</h1>
      <Card username = "Ashu" btnText = "Click Me"/>
      <Card username ="Annad"/>
    </>
  );
}

export default App;
