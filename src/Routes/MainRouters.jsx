import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout/Layout'
import HomePage from '../Pages/Home/HomePage'
import AboutPage from '../Pages/About/AboutPage'
import ProductsPage from '../Pages/Products/ProductsPage'
import ContactPage from '../Pages/Contact/ContactPage'
import FAQPage from '../Pages/FAQ/FAQPage'
import NotFoundPage from '../Pages/NotFound/NotFoundPage'
import CartPage from '../Pages/Cart/CartPage'


const MainRouters = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />

        </Routes>

    </div>
  )
}

export default MainRouters