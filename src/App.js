import logo from './logo.svg';
import './App.css';

import NavBar from "./Component/NavBar"
import Products from "./Component/Products"
import Posts from './Component/Posts';

function App() {
  const photoUrl = "https://jsonplaceholder.typicode.com/photos"
  return (
    <div className="App">

      {/*Nav start */}
      <NavBar />

      <Posts />

      <Products />
    {/*Nav End */}

    </div>
  );
}

export default App;
