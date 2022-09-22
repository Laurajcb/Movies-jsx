import React, { useEffect } from "react";
import { Navigate } from 'react-router-dom';


function Detail() {
  let token = sessionStorage.getItem('token');
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get('movieID');

  useEffect(() => {
    console.log(movieID)

  }, []);

  return (
    <>
      {!token && < Navigate to="/" />}
      <h5>Title: Hello title</h5>

      <section className="row">
        <div className="col-4">
          image
        </div>
        <div className="col-8">
          <h5>
            Release date: 02/34/56
          </h5>
          <h5>Review:</h5>
          <p>
            Lorem ipsum jdsvg whndv; dshco  ewfn  hjs ;ENDF;GHSDCDSHDIUwdj  idnwdh  sdfj
            wbdecwdfbcdgcejnvweruhvqwhrvnhrv
            hqeurfhqerjnfviuqherfvnqdfvqo3fpowckjdsnvbefijpwkdcndks;vnv fnqdfn;kqefhq;ef
            fdefoiw3eu qwheoiqks, r230rormweifdo.
          </p>
          <h5>Genres:</h5>
          <ul>
            <li>Genero1</li>
            <li>Genero2</li>
          </ul>
        </div>

      </section>
    </>
  )
}

export { Detail };
