import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { ProductsPage } from './pages/ProductsPage';
import { ProductsFormPage } from './pages/ProductsFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast'

function App(){
  return (
    <BrowserRouter>
      <div className='container mx-auto'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Navigate to="/products" />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products-create' element={<ProductsFormPage />} />
        <Route path='/products/:id' element={<ProductsFormPage />} />
      </Routes>
      <Toaster/>
      </div>
    </BrowserRouter>
  )
}

export default App;
