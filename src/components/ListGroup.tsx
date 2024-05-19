import { MouseEvent, useState } from "react";

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
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={(e) => handleClick(item, index, e)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
