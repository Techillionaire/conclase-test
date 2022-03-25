import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Todos from './components/Todos';
import Todo from './components/Todo';

function App() {
  return (

    <BrowserRouter>
      <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/assessment" element={<Todos />} >
              <Route path="/assessment/:id" element={<Todo />} />
            </Route>
        </Routes>
    </BrowserRouter>
    
    
      
   
    );
}

export default App;
