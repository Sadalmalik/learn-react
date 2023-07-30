import { useState } from "react";

interface ListGroupProps {
  header: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ header, items, onSelectItem }: ListGroupProps) {
  let [selectedIndex, setState] = useState(-1);

  return (
    <>
      <h2>{header}</h2>
      {items.length === 0 ? <p>No items found!</p> : null}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              if (selectedIndex === index) setState(-1);
              else {
                setState(index);
                onSelectItem(item);
              }
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
