import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { ProductsFormPage } from './pages/ProductsFormPage';
import { Navigation } from './components/Navigation';

function App(){
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Navigate to="/products" />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products-create' element={<ProductsFormPage />} />
        <Route path='/products/:id' element={<ProductsFormPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
