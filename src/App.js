import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Router/Routes';


function App() {
  return (
    <div className='bg-themeColor'>
      <RouterProvider router={router} ></RouterProvider>
    </div>
  ); 
}

export default App;


