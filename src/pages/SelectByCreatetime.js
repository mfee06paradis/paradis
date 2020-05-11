import React,{useState, useEffect} from "react";

const SelectByCreatetime = (props) => {
     
    return (
        <>
           <select className="mr-3 form-control " style={{ width: 200 }}>
              <option value="" disabled selected hidden>
                新品排序
              </option>
              <option value="volvo">時間由新到舊</option>
              <option value="saab">時間由舊到新</option>
            </select>
        </>
    );
  };
  
  export default SelectByCreatetime;