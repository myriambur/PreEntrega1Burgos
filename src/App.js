
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navBar'
import 'bootstrap-icons/font/bootstrap-icons.css'

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer texto='Bienvenidos'/>
    </>
  );
}

export default App;
