import React, { useState, useEffect } from 'react'

function Cart() {
  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <ul className="list-group">
        <li className="list-group-item">產品/數量/單價</li>
      </ul>
      <h3>總價：</h3>
    </>
  )

  return (
    <>
      <div className="container">{display}</div>
    </>
  )
}

export default Cart
