import React from 'react'
import '../styles/discount.scss'
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
            <div className="bg-white">
                <div className="container">
                    <div className="row ">

                        <div className="row col-12 disMenu1">
                            <div className="col-6 text-center disBtn1-1">
                                <button className="btn-white">當季優惠</button>

                            </div>
                            <div className="col-6 text-center disBtn1-2">
                                <button className="btn-white">現正優惠</button>
                            </div>

                        </div>

                        <div className="row col-md-2 disMenu2">
                            <div className="col-md-12 text-center">
                                <button className="bg-white">
                                    <div className="menu-img">
                                        {menu_title('Seson', '當季優惠')}
                                        <hr></hr>
                                    </div>
                                </button>

                                <button className="bg-white">
                                    <div className="menu-img">
                                        {menu_title('Now On Sale', '現正優惠')}
                                        <hr></hr>
                                    </div>
                                </button>

                            </div>
                        </div>
                        <div className="col-12 col-md-10 ">

                            <div className="disImg">
                                <img src="http://fakeimg.pl/100x400/F4A7B9/282828/?text=DISCONT" className="img-fluid" alt="" />
                            </div>
                            <div className="disImg">
                                <img src="http://fakeimg.pl/100x400/F4A7B9/282828/?text=DISCONT" className="img-fluid" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )


}

export default disconts