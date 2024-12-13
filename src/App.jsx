import React, { useEffect, useState } from 'react';
import HomePage from './HomePage/HomePage';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch images from Lorem Picsum API
    axios
      .get('https://picsum.photos/v2/list?page=1&limit=100')
      .then((response) => {
        const formattedData = response.data.map((item) => ({
          id: item.id,
          url: item.download_url,
          thumbnail: `${item.download_url}?w=150&h=150&crop=faces&fit=crop`,
          user: `Author ${item.author}`,
        }));
        setData(formattedData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data.length > 0 ? (
        <HomePage posts={data} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default App;
