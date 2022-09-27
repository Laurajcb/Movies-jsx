import React from "react";
import swAlert from '@sweetalert/with-react';


function Search() {
  const submitHandler = e => {

    e.preventDefault();
    const keyword = e.currentTarget.keyword.value

    if(keyword.length === 0){
      swAlert(<h5>Type something field can't be empty</h5>)
    }

   
  }

  return (
    <form className="d-flex align-items-center" onSubmit={submitHandler}>
      <label className="form-label mb-0">
        <input className="form me-2 fw-lighter fs-9" type="text" name="keyword" placeholder="Titles, people, genre"></input>
      </label>
      <button type="submit" className="btn btn-outline-primary ml-12 btn-sm">Search</button>
    </form>
  )
}

export { Search };