// import React from "react";
// import "../styles/App.css";

// var colors = [
//   '#16a085',
//   '#27ae60',
//   '#2c3e50',
//   '#f39c12',
//   '#e74c3c',
//   '#9b59b6',
//   '#FB6964',
//   '#342224',
//   '#472E32',
//   '#BDBB99',
//   '#77B1A9',
//   '#73A857'
// ];

// const App = () => {

//     return (
//       <div id="main">
//         <div id="wrapper">
          
//         </div>
//       </div>
//     );
// };

// export default App;


import React, { useState, useEffect } from "react";
import "../styles/App.css";

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const App = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://api.quotable.io/random")
      .then(response => response.json())
      .then(data => {
        setQuote(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleNewQuote = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    fetchQuote();
  };

  return (
    <div id="main">
      <div id="wrapper">
        <div id="quote-box">
          <div id="text" className="quote-text">
            {quote.content}
          </div>
          <div id="author" className="quote-author">
            {quote.author}
          </div>
          <div className="buttons">
            <button id="new-quote" onClick={handleNewQuote}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
