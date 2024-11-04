import './App.css'
import '../src/Components/Common/LoginRegister.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import app from './fairbase.config'
import { ToastContainer, toast } from 'react-toastify';

function App() {
   const myroute   = createBrowserRouter ( createRoutesFromElements (
    <Route>
       <Route   path=''          element = { <Register/>}  />
       <Route   path='/Login'    element = { <Login/>}     />
       <Route   path='// Register'    element = { <Register/>}     />


    </Route>

   ))


  return (
    <>
       <RouterProvider router={myroute} />
       <ToastContainer />
   
    </>
  )
}

export default App
