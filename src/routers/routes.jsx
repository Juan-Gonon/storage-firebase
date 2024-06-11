import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { ProductsConfig } from '../pages/ProductsConfig'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<ProductsConfig />} />
      </Routes>
    </BrowserRouter>
  )
}
