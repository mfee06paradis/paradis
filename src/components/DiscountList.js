import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../styles/discount.scss'
import Dis1 from './DiscountList/DiscountList1'
import Dis2 from './DiscountList/DiscountList2'
import Dis3 from './DiscountList/DiscountList3'
import Dis4 from './DiscountList/DiscountList4'
import Dis5 from './DiscountList/DiscountList5'


function DiscountList() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/DiscountList/1">
            <Dis1 />
          </Route>
          <Route exact path="/DiscountList/2">
            <Dis2 />
          </Route>
          <Route exact path="/DiscountList/3">
            <Dis3 />
          </Route>
          <Route exact path="/DiscountList/4">
            <Dis4 />
          </Route>
          <Route exact path="/DiscountList/5">
            <Dis5 />
          </Route>
        </Switch>
      </>
    </Router>
  )
}

export default DiscountList
