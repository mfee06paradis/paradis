import React from 'react'
import '../styles/discount.css'
function discont() {


  return (
    <>
      <div class="container">
        <div class="row ">
          <div class="row col-12 disMenu1">
            <div class="col-6 text-center disBtn1-1">
              <button className="btn-white">當季優惠</button>
            </div>
            <div class="col-6 text-center disBtn1-2">
              <button className="btn-white">現正優惠</button>
        </div>
            </div>
            <div class="row col-md-2 disMenu2">
              <div class="col-md-12 text-center">
                <button>
                <img src="/img/loge1.svg" width="30px" height="30px" class="disBtn2-1"></img>
                <p>Seson</p>
                <p>當季優惠</p>
                </button>
                <hr></hr>
                <img src="/img/loge1.svg" width="30px" height="30px" class="disBtn2-2"></img>
                <p>Now On Sale</p>
                <p>現正優惠</p>
                <hr></hr>
              </div>
            </div>
            <div class="col-12 col-md-10 ">

              <div class="disImg">
                <img src="http://fakeimg.pl/800x400/F4A7B9/282828/?text=DISCONT" class="img-fluid" alt="" />
              </div>

            </div>
          </div>
        </div>
    </>
  )


}

export default discont
