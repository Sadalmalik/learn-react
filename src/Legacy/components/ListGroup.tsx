import { MouseEvent, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface Props {
  heading: string;
  items: string[];
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function handleClick(item: string, index: number, event: MouseEvent) {
    console.log("Clicked", index, item, event);
    setSelectedIndex(index);
  }

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <>
            <CSSTransition
              in={selectedIndex === index}
              timeout={300}
              className="list-group-item my-list-item"
            >
              <li key={item} onClick={(e) => handleClick(item, index, e)}>
                {item}
              </li>
            </CSSTransition>
          </>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
