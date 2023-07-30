import { useState } from "react";
import Message from "./components/Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = [
    "басист",
    "перетруска",
    "публицист",
    "черчение",
    "ботинки",
    "трон",
    "швея",
    "батрак",
  ];

  let [showAlert, setState] = useState(false);

  const HandleItemSelected = (item: string) =>
    console.log("Item selected: " + item);

  return (
    <center>
      <div className="col-lg-8">
        <Message />
        <ListGroup
          header="Words"
          items={items}
          onSelectItem={HandleItemSelected}
        />
        {showAlert && (
          <Alert onClose={() => setState(false)}>
            <strong>Alert:</strong> This is test alert!
          </Alert>
        )}
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setState(true)}
        >
          Test Alert
        </button>
      </div>
    </center>
  );
}

export default App;
