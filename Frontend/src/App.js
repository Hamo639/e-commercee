import { useState } from 'react';
import Home from './pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from 'Root';
import Hero from './pages/component/Hero/hero';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root  />}>
        <Route index element={<Home/>} />

        <Route path="/hero" element={<Hero />} />

      </Route>
    )
  );
  return (
        <RouterProvider router={router} />

  );
}

export default App;
