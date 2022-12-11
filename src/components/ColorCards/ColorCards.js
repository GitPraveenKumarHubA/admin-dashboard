import React from "react";
import ColorCard from "./ColorCard";

function ColorCards() {
  return (
    <div className="row mt-4">
      <ColorCard color="Primary" colorCode="#4e73df" />
      <ColorCard color="Success" colorCode="#1cc88a" />
      <ColorCard color="Info" colorCode="#36b9cc" />
      <ColorCard color="Warning" colorCode="#f6c23e" />
      <ColorCard color="Danger" colorCode="#e74a3b" />
      <ColorCard color="Secondary" colorCode="#858796" />
      <ColorCard color="Light" colorCode="#f8f9fc" />
      <ColorCard color="Dark" colorCode="#5a5c69" />
    </div>
  );
}

export default ColorCards;
