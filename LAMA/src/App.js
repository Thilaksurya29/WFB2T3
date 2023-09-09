import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EmployeeList from './Components/EmployeeList';
import AddEmployee from './Components/AddEmployee';
import RootLayout from './Components/RootLayout';

const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    children:[
      {path: "/", element: <EmployeeList/>},
      {path:"/add",element: <AddEmployee/>},
    ],
  },
]);

function App() {
   return <RouterProvider router={router} />
}

export default App;
