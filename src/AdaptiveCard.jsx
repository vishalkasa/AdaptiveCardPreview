import React, { useEffect, useState } from "react";
import * as AdaptiveCards from "adaptivecards";

const AdaptiveCardRenderer = ({ cardJson }) => {
  const [adaptiveCardInstance, setAdaptiveCardInstance] = useState(null);

  useEffect(() => {
    const renderCard = () => {
      const cardInstance = new AdaptiveCards.AdaptiveCard();
      cardInstance.parse(cardJson);
      setAdaptiveCardInstance(cardInstance);
    };

    renderCard();
  }, [cardJson]);

  useEffect(() => {
    if (adaptiveCardInstance) {
      const renderedCard = adaptiveCardInstance.render();
      const cardContainer = document.getElementById("cardContainer");
      while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
      }
      cardContainer.appendChild(renderedCard);
      
    }
  }, [adaptiveCardInstance]);

  return <div id="cardContainer"></div>;
};

export default AdaptiveCardRenderer;
