import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { useState } from 'react'

import Uielements from './pages/Uielements'
import Home from './pages/Home'
import Brands from './pages/Brands'
import Product from './pages/Product'
import Discount from './pages/Discount'
import Discounts from './pages/Discounts'
import DiscountList from './components/DiscountList'
import MakeUp from './pages/Makeup'
import Lesson from './pages/Lesson'
import AdaptiveTest from './pages/AdaptiveTest';
import Cart from './pages/Cart'
import Ani from './pages/Ani'
import Member from './pages/Member'
import MemberAdd from './pages/MemberAdd'
import NotFoundPage from './pages/NotFoundPage'

import Menu from './components/Menu'
import Footer from './components/Footer'

function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (


    <Router>
      <>
        <Menu isAuth={isAuth} setIsAuth={setIsAuth} />
        <Switch>
          <Route exact path="/">
            <Ani />
          </Route>
          <Route path="/Uielements">
            <Uielements />
          </Route>
          <Route path="/Brands">
            <Brands />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/product/:type?/:id?">
            <Product />
          </Route>
          <Route path="/Discount">
            <Discount />
          </Route>
          <Route path="/Discounts">
            <Discounts />
          </Route>
          <Route path="/DiscountList">
            <DiscountList />
          </Route>
          <Route path="/ani">
            <Ani />
          </Route>
          <Route path="/MakeUp">
            <MakeUp />
          </Route>
          <Route path="/Lesson">
            <Lesson />
          </Route>
          <Route path="/adaptive-test" exact>
            <AdaptiveTest />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/Member">
            <Member isAuth={isAuth} />
          </Route>
          <Route path="/MemberAdd">
            <MemberAdd />
          </Route>
          <Route exact path="/">
            <Ani />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>

        </Switch>
        <Footer />
      </>
    </Router>
  )
}

export default App
