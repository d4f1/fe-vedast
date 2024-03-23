import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    let config = {
          method: 'get',
          maxBodyLength: Infinity,
          url: 'http://127.0.0.1:8000/api/vehicle',
          headers: {
            'Authorization': 'Basic ZGFmaTpUZXN0QDEyMyE='
          }
        };
    axios.request(config)
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Vehicles</h1>
      <h2>{JSON.stringify(message)}</h2><br/>
    </div>
  );
}

export default HelloWorld;