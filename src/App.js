
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import SearchResult from './components/SearchResult';
import Movie from './components/Movie';
import Actor from './components/Actor';



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:'/search/:movie/',
      element:<SearchResult/>
    },
//if I want to extract something from the path => I will need a viarable
// movie=> variable i.e it can vary for different conditions 

    {
      path:'/movie/:movieId',
      element:<Movie/>
    },
    {
      path:'/actor/:actorId',
      element:<Actor/>
    }
  ]);

  return (
   <>
   <RouterProvider router={router} />
   </>
  );
}

export default App;
