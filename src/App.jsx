import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import './App.css'
import Cart from "./frontend/pages/cart/Cart";

//Internal Imports.
const Home = lazy(() => import("./frontend/pages/home/Home"));
const Header=lazy(()=>import(('./frontend/components/header/Header')))

function App() {
  return (
      <Suspense fallback="loading...">
        <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </Suspense>
  );
}

export default App;
