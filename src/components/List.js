import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function List() {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  console.log(token);

  useEffect(() => {
    if (token === null || token === undefined) {
      navigate('/');
    }
  })

  return (
    <h2>
      Soy el componente listado
    </h2>
  )
};

export { List };
