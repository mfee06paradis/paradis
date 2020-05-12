import React from "react";
import { Modal, Pagination } from "react-bootstrap";

const ProductPagination = (props) => {
  const changePagination = () => {};

  const createPagination = () => {
    let active = props.currentIndex;
    console.log("active = " + active);
    let items = [];

console.log("8888888888888888          " + items);

    if (active <= props.paginationInterval) {
      let index = 1;
      // 印出前5個數字
      for (let number = index; number <= props.paginationInterval; number++) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === active}
            onClick={() => props.changePagination(number)}
          >
            {number}
          </Pagination.Item>
        );
      }
      // 印出 ......
      index += props.paginationInterval;
      items.push(
        <Pagination.Ellipsis
          key={index}
          //   active={props.endIndex === active}
          onClick={() => props.changePagination(index)}
        />
      );
      // 印出結尾
      items.push(
        <Pagination.Item
          key={props.endIndex}
          active={props.endIndex === active}
          onClick={() => props.changePagination(props.endIndex)}
        >
          {props.endIndex}
        </Pagination.Item>
      );
    } 
    else if (active > props.endIndex - props.paginationInterval) { //--------------------------------
      //-------------- 後段

      console.log("-------後段--------- " + active);

      items.push(
        <Pagination.Item
          key={1}
          active={1 === active}
          onClick={() => props.changePagination(1)}
        >
          1
        </Pagination.Item>
      );

      //......
      let indexOfPreviousEllipsis = active - props.paginationInterval;
      items.push(
        <Pagination.Ellipsis
          key={888}
          //   active={props.endIndex === active}
          onClick={() => props.changePagination(indexOfPreviousEllipsis)}
        />
      );

      for (
        let number = props.endIndex - props.paginationInterval + 1;
        number <= props.endIndex;
        number++
      ) {


        console.log("------------------ --- --- --- " + number)

        items.push(
          <Pagination.Item
            key={number}
            active={number === active}
            onClick={() => props.changePagination(number)}
          >
            {number}
          </Pagination.Item>
        );
      }

      //
    } 
    else { //-----------------------------------------------------------------------------------------
      console.log("-------中段--------- " + active);
      // 1
      items.push(
        <Pagination.Item
          key={1}
          active={1 === active}
          onClick={() => props.changePagination(1)}
        >
          1
        </Pagination.Item>
      );

      //previous ......
      let indexOfPreviousEllipsis = active - props.paginationInterval;
      items.push(
        <Pagination.Ellipsis
          key={111}
          //   active={props.endIndex === active}
          onClick={() => props.changePagination(indexOfPreviousEllipsis)}
        />
      );

      for (
        let number = active;
        number < active + props.paginationInterval;
        number++
      ) {
        items.push(
          <Pagination.Item
            key={number}
            active={number === active}
            onClick={() => props.changePagination(number)}
          >
            {number}
          </Pagination.Item>
        );
      }

      //next ......
      let indexOfNextEllipsis = active + props.paginationInterval;
      items.push(
        <Pagination.Ellipsis
          key={999}
          //   active={props.endIndex === active}
          onClick={() => props.changePagination(indexOfNextEllipsis)}
        />
      );

      // 印出結尾
      items.push(
        <Pagination.Item
          key={props.endIndex}
          active={props.endIndex === active}
          onClick={() => props.changePagination(props.endIndex)}
        >
          {props.endIndex}
        </Pagination.Item>
      );
    }


    return items;
  };


  // ============================================================================
  return (
    <Pagination indicators={false} interval={null}>
      {createPagination()}
    </Pagination>
  );
};
export default ProductPagination;
