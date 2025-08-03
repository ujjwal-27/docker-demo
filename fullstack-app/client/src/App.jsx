import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001')
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error('Error:', err));
  }, []);

  return <h1>{message}</h1>;
}

export default App;
