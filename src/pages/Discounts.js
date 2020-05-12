import React from 'react'
import '../styles/discount.scss'
import { NavLink } from 'react-router-dom'
import demo1 from '../images/discount/demo1.jpg'
import demo2 from '../images/discount/demo2.jpg'
import demo3 from '../images/discount/demo3.jpg'
import demo4 from '../images/discount/demo4.jpg'
import demo5 from '../images/discount/demo5.jpg'
function disconts() {
    const menu_title = (eng, chs) => {
        return (
            <>
                <div className="menu-title">
                    <p>{eng}</p>
                    <p>{chs}</p>
                </div>
            </>
        )
    }
    return (
        <>
            <div className=" dis bg-white">
                <div className="container">
                    <div className="row">
                        <div className="row col-12 disMenu1">
                            <div className="col-6 text-center disBtn1-1">
                                <NavLink
                                    to="/discount"
                                >
                                    <button className="btn-white">當季優惠</button>
                                </NavLink>
                            </div>
                            <div className="col-6 text-center disBtn1-2">
                                <NavLink
                                    to="/discounts"
                                >
                                    <button className="btn-white">現正優惠</button>
                                </NavLink>
                            </div>

                        </div>

                        <div className="row col-md-2 disMenu2">
                            <div className="col-md-12 text-center">
                                <NavLink
                                    to="/discount"
                                >
                                    <div className="menu-img ">
                                        {menu_title('Seson', '當季優惠')}

                                    </div>
                                </NavLink>
                                <hr></hr>
                                <NavLink
                                    to="/discounts"
                                >
                                    <div className="menu-img ">
                                        {menu_title('Now On Sale', '現正優惠')}

                                    </div>
                                </NavLink>
                                <hr></hr>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 ">
                            <div className="disImg">
                                <NavLink
                                    to="/discountList/1"
                                >
                                    <img src={demo1} className="img-fluid" alt="" />
                                </NavLink>
                            </div>
                            <div className="disImg">
                                <NavLink
                                    to="/discountList/2"
                                >
                                    <img src={demo2} className="img-fluid" alt="" />
                                </NavLink>
                            </div>
                            <div className="disImg">
                                <NavLink
                                    to="/discountList/3"
                                >
                                    <img src={demo3} className="img-fluid" alt="" />
                                </NavLink>
                            </div>
                            <div className="disImg">
                                <NavLink
                                    to="/discountList/4"
                                >
                                    <img src={demo4} className="img-fluid" alt="" />
                                </NavLink>
                            </div>
                            <div className="disImg">
                                <NavLink
                                    to="/discountList/5"
                                >
                                    <img src={demo5} className="img-fluid" alt="" />

                                </NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default disconts