// General
import {
  createBrowserRouter,
  RouterProvider,
  //useParams,
} from "react-router-dom";

// Components
//import Alert from "../components/Alert";
//import Button from "../components/Button";
//import ListGroup from "../components/ListGroup";
import Navbar from "../components/Navbar";

// Pages
import Landing from "./Landing";
import Store from "./Store";
import Product from "./Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/page/:store_page",
    element: <Store />,
  },
  {
    path: "/product/:product_id",
    element: <Product />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <nav>
        <form>
          <input type="search" placeholder="Search" aria-label="Search" />
          <button type="submit">Search</button>
        </form>
      </nav>
      <div className="containert">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
