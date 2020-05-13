import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';

import Uielements from './pages/Uielements';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Product from './pages/Product';
import Discount from './pages/Discount';
import Discounts from './pages/Discounts';
import DiscountList from './components/DiscountList';
import Makeup from './pages/Makeup';
import Lesson from './pages/Lesson';
import AdaptiveTest from './pages/AdaptiveTest';
import Cart from './pages/Cart';
import Ani from './pages/Ani';
import Member from './pages/Member';
import MemberAdd from './pages/MemberAdd';
import CreditCard from './pages/CreditCard';
import Account from './pages/Account';
import EditAccount from './pages/EditAccount';
import MyOrders from './pages/MyOrders';
import MyFavorite from './pages/MyFavorite';
import NotFoundPage from './pages/NotFoundPage';

import Menu from './components/Menu';
import Footer from './components/Footer';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [cartNumber, setCartNumber] = useState(0);

  return (
    <Router>
      <>
        <Menu
          isAuth={isAuth}
          setIsAuth={setIsAuth}
          cartNumber={cartNumber}
          setCartNumber={setCartNumber}
        />
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
          <Route path="/makeup" exact>
            <Makeup />
          </Route>
          <Route path="/lesson/:id" exact>
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
          <Route path="/CreditCard">
            <CreditCard />
          </Route>
          <Route path="/Account">
            <Account />
          </Route>
          <Route path="/EditAccount">
            <EditAccount />
          </Route>
          <Route path="/myorders">
            <MyOrders />
          </Route>
          <Route path="/MyFavorite">
            <MyFavorite />
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
  );
}

export default App;
