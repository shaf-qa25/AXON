import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

import { Home } from "./pages/home"
import { JobDetail } from "./pages/jobDetail"
import { JobList } from "./pages/jobListing"
import { Dashboard } from "./pages/dashboard"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import Register from "./pages/register"
import About from "./pages/About"
import Careers from "./pages/Careers"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Window focus pe fetch nahi karega
      retry: 1, // Fail hone pe sirf ek baar try karega
    },
  },
});


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/> 
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/careers",
          element:<Careers/>
        },
        {
          path:"/blog",
          element:<Blog/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/details",
          element :<JobDetail/>
        },
        {
          path:"/list",
          element:<JobList/>
        },
        {
          path:"/dashboard",
          element:<Dashboard/>
        }
      ]
    },
    
  ])


  return (
    <>
    <QueryClientProvider client={queryClient}>

      <RouterProvider router={router}/>
    </QueryClientProvider>

    </>
  )
}

export default App
