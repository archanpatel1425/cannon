import React, { useEffect, useState } from 'react';

const Home = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch('/content/home.json')
      .then(response => response.json())
      .then(data => setHomeData(data));
  }, []);

  if (!homeData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{homeData.title}</h1>
      <p>{homeData.description}</p>
      <div>{homeData.content}</div>
    </div>
  );
};

export default Home;
