import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Tensore", "Quaternion", "Abstraction"];

  const clickHandler = () => {
    console.log("Clicked!!!");
  };

  return (
    <div className="containert">
      <Alert>
        AAA<b>AA</b>A!
      </Alert>
      <ListGroup items={items} heading="Lolololo!" />
      <Button onClick={clickHandler}>Press me!</Button>
    </div>
  );
}

export default App;
