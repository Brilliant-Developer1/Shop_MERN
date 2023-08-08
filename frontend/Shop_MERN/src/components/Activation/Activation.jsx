import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { server } from '../../server';
import axios from 'axios';

const Activation = () => {
  const { url } = useParams();
  console.log('Activation Token:', url);
  const [error, setError] = useState(false);
  console.log('Hit-1');
  useEffect(() => {
    if (url) {
      console.log('hitted');
      const sendRequest = async () => {
        try {
          const res = await axios.post(`${server}/user/activation`, {
            url,
          });
          console.log(res.data);
        } catch (error) {
          console.error('Error activating account:', error.message);
          setError(true);
        }
      };
      sendRequest();
    }
  }, [url]);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default Activation;
