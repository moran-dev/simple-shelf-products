import "./App.css";
import infos from "./infos/products";
import products from "./infos/info-products";
import CardsInfo from "./infos/cards";

function App() {
  console.log("infos", infos);
  console.log("products", products);
  return (
    <div className="App">
      <CardsInfo></CardsInfo>
    </div>
  );
}

export default App;
