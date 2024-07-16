import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import './App.css';
import Button from '@mui/material/Button';
import { Routes,Route,useNavigate } from 'react-router-dom';
import { Home } from './components/Home';
import { ContextProvider } from './components/ContextProvider';
import { ListItem } from './components/ListItem';
import AddProducts from './components/AddProducts';
import { Edit } from './components/Edit';
import { ProductDetails } from './components/ProductDetails';


function App() {

const navigate = useNavigate()

  return (
    <ContextProvider>
      <CssBaseline/>
    <div className="App">
      <AppBar position = "static">
        <Toolbar>
        <Button onClick={() => navigate("/")} color="inherit">Home</Button>
        <Button onClick={() => navigate("/products")} color="inherit">ProductList</Button>
        <Button onClick={() => navigate("/products/add")} color="inherit">Add Products</Button>
        <Button onClick={() => navigate("/products/:id")} color="inherit">Product Details</Button>
        
        </Toolbar>
        </AppBar>  
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/products" element = {<ListItem/>} />
          <Route path = "/products/add" element = {<AddProducts/>} />
          <Route path = "/products/:id" element = {<ProductDetails/>} />
          <Route path = "/products/edit/:id" element = {<Edit/>} />
            
        </Routes>
      
    </div>
    </ContextProvider>
  );
}

export default App;
