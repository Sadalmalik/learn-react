import { useParams } from "react-router-dom";
import { Pagination, PaginationContext } from "../components/Pagination";

interface CardProps {
  productId: number;
  text: string;
}

function Card(props: CardProps) {
  return (
    <div className="col-sm-4 card">
      <img
        src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

function Store() {
  let params = useParams();
  let cards = ["first", "second", "third", "etc."];
  let paginationContext = new PaginationContext("/page/", 6, (_: number) => {});

  if (params.store_page != null) paginationContext.current = +params.store_page;

  return (
    <>
      <div>Store page: {params.store_page}</div>
      <Pagination context={paginationContext} />
      <div className="test_block row">
        {cards.map((item, index) => (
          <Card productId={index} text={item} />
        ))}
      </div>
      <Pagination context={paginationContext} />
    </>
  );
}

export default Store;
