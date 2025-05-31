import './App.css';
import Body from './components/Body';
import Browse from './components/Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />
  },
  {
    path: '/browse',
    element: <Browse />
  }  
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;