import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Home } from "./pages/home"
import { JobDetail } from "./pages/jobDetail"
import { JobList } from "./pages/jobListing"
import { Dashboard } from "./pages/dashboard"
import AppLayout from "./pages/AppLayout"
import Login from "./pages/Login"
import Register from "./pages/register"

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
      <RouterProvider router={router}/>
    </>
  )
}

export default App

// 3. "How it Works" Section
// Naye users ke liye 3 simple steps:

// Search: Apni pasand ki job dhoondo.

// Apply: Profile banao aur apply karo.

// Get Hired: Direct companies se connect karo.

// 4. Featured Jobs (Trending Jobs)
// Yahan tum 4-6 top job cards dikha sakte ho (abhi dummy data use kar lo). Isse page bhara-bhara aur active lagta hai.

// 5. Stats / Trust Bar
// Agar project ko thoda serious dikhana hai:

// "10,000+ Active Jobs", "500+ Companies", "1M+ Users".

// Isse portal ki authority banti hai.