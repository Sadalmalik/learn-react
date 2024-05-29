import { useParams } from "react-router-dom";

function Product() {
  let params = useParams();
  return <div>Product ID: {params.product_id}</div>;
}

export default Product;
