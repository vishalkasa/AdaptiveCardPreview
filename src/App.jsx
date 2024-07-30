import React, { useState } from 'react';
import AdaptiveCardRenderer from './AdaptiveCard';

const App = () => {
  const [cardJson, setCardJson] = useState('');
  const [finalCardJson, setFinalCardJson] = useState();
  const [showCard, setShowCard] = useState(false);
  const [loader,setloader] = useState(false)
  const handleGenerateCard = () => {
    try {
      setFinalCardJson(JSON.parse(cardJson));
      setCardJson('');
      setloader(false);
      setShowCard(true);

    } catch (error) {
      alert('Invalid JSON code. Please enter valid JSON.');
    }
  };

  const handleResetCard = () => {
    setShowCard(false);
    setCardJson('');
  };
  const handleApiResponse = async () => {
    const apiUrl = 'https://localhost:7265/api/CoPilot/PostQuestion';
    const question = cardJson;
    const sessionId = 'string';
    console.log("hellloos")
    setloader(true)
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          sessionId,
        }),
      });
      if (response.ok) {
        const { text_Content } = await response.json();
        console.log("hellloos",text_Content)
        setFinalCardJson(JSON.parse(text_Content));
        setCardJson('');
        setloader(false)
        setShowCard(true);
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error) {
      console.error('Request Exception:', error);
    }
  };
  return (
    <div>
      <h1>Adaptive Card Generator</h1>
      <textarea
        rows="10"
        cols="50"
        placeholder="Enter your Adaptive Card JSON code here"
        value={cardJson}
        onChange={(e) => setCardJson(e.target.value)}
      />
      <br />
      <button onClick={handleGenerateCard}>Generate Adaptive Card</button>
      <button onClick={handleResetCard}>Reset</button>
      {/* <button onClick={handleApiResponse}>Get Api Result</button> */}
      {loader ? <div>Loading data, please wait...</div> : 
  showCard && <AdaptiveCardRenderer cardJson={finalCardJson} />
}
    </div>
  );
};

export default App;
