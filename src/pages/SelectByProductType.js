import React,{useState, useEffect} from "react";

const SelectByProductType = (props) => {
     
    return (
        <>
            <select
              className="mr-3 form-control"
              onMouseDown="if(this.options.length>4){this.size=5}"
              onBlur="this.size=1"
              onChange="this.size=1"
              defaultValue=""
              style={{ width: 200 }}
            >
              <option value="" disabled hidden>
                商品種類
              </option>
              <option value="1">唇蜜</option>
              <option value="2">唇膏</option>
              <option value="3">唇釉</option>
              <option value="4">唇露</option>
              <option value="6">唇線筆</option>
              <option value="7">底妝</option>
              <option value="8">蜜粉</option>
              <option value="9">腮紅</option>
              <option value="10">遮瑕</option>
              <option value="11">眼影</option>
              <option value="12">眼線</option>
              <option value="13">眉彩</option>
              <option value="14">睫毛膏</option>
              <option value="15">遮瑕膏</option>
              <option value="16">修容</option>
              <option value="17">打亮</option>
              <option value="18">多功能彩妝</option>
            </select>
        </>
    );
  };
  
  export default SelectByProductType;