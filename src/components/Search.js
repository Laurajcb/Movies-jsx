import React from "react";
import swAlert from '@sweetalert/with-react';
import { useNavigate } from "react-router-dom";


function Search() {
  const history = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim()

    if (keyword.length === 0) {
      swAlert(<h5>Type something field can't be empty</h5>);
    }
    else if (keyword < 3) {
      swAlert(<h5>You should type more characteres</h5>);
    }
    else {
      e.currentTarget.keyword.value = '';
      history(`/searchResult?searched-word=${keyword}`);
    }

  }

  return (
    <form className="d-flex align-items-center" onSubmit={submitHandler}>
      <label className="form-label mb-0">
        <input className="form me-2 fw-lighter fs-6" type="text" name="keyword" placeholder="Titles, people, genre"></input>
      </label>
      <button type="submit" className="btn btn-outline-primary ml-12 btn-sm">Search</button>
    </form>
  )
}

export { Search };
