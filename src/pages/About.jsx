import React, { useEffect, useState } from 'react';

const About = () => {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        fetch('/content/about.json')
            .then(response => response.json())
            .then(data => setAboutData(data))
            .catch(err => console.error("Error fetching about.json: ", err));
    }, []);

    if (!aboutData) return <div>Loading...</div>;

    return (
        <div className="about-page">
            <h1>{aboutData.title}</h1>
            <p>{aboutData.description}</p>
            <div>{aboutData.content}</div>
        </div>
    );
};

export default About
