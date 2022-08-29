import { Navbar, NavbarBrand } from 'reactstrap';
import { MenuComponent } from "./components/MenuComponent";
import { DISHES } from './shared/dishesList';

const x = DISHES.map(dish =>(console.log(`dishes id = ${dish.name}`)))


function App() {

  return (
    <div className="App">
    <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </div>
    </Navbar>
    <MenuComponent />
  </div>

  )
  
  
}

export default App
