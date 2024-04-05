import React from "react";
import { PopupWidget } from "react-calendly";

const App = () => {
  return (
    <div className="App">
      <PopupWidget
        url="https://calendly.com/uddhavsonawane67"
        
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
    </div>
  );
};

export default App;
