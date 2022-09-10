
import './App.css';
import ItemListConteiner from './components/ItemListConteiner';
import NavBar from './components/NavBar';
import Saludo from './components/Saludo';

function App() {

 const mensaje='Bienvenido a mi App'
 const estilos= {
  padding:'20px',
  backgroundColor:'#789'
  
  } 
   

  return (
    <div className='conteiner'>
      <h1>hola mundo!!</h1>
      <h3 style={estilos}>{mensaje}</h3>
      
     
      </div>  
    
  );
}

export default App;
