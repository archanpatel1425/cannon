import React, { useEffect, useState } from 'react';
import './App.css';

const HomePage = () => {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch('/content/home.json')  // Access the JSON file from public folder
      .then(response => response.json())
      .then(data => setHomeData(data));
  }, []);

  if (!homeData) return <div>Loading...</div>;

  return (
    <div className="home-page">
      <h1>{homeData.title}</h1>
      <p>{homeData.description}</p>
      <div>{homeData.content}</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
};

export default App;
