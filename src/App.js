import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Routes';
import Home from './components/Page/Home/Home';


function App() {
  return (
    <div>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  ); 
}

export default App;


