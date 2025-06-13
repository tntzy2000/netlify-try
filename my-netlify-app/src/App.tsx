import { useState } from 'react';
import './App.css';

function App() {
  const [clickCount, setClickCount] = useState(0);
  const [buttonText, setButtonText] = useState('Click me!');
  
  const handleButtonClick = () => {
    const newCount = clickCount + 2;  // Increment by 2 instead of 1
    setClickCount(newCount);
    
    // Change button text based on click count
    const texts = [
      'Clicked!',
      'Great!',
      'Awesome!',
      'Super!',
      'Amazing!',
      'Incredible!',
      'Unstoppable!',
      'Phenomenal!',
      'Fantastic!',
      'Outstanding!',
      'Terrific!',
      'Excellent!',
      'Marvelous!',
      'Splendid!',
      'Wonderful!'
    ];
    
    setButtonText(texts[Math.floor(newCount / 2) % texts.length]);  // Adjust index for incrementing by 2
  };

  return (
    <div className="app">
      <h1>Hello Netlify!</h1>
      <p>Welcome to my React + Vite application</p>
      
      <div className="counter-display">
        <p>You've clicked the button:</p>
        <div className="counter">{clickCount}</div>
        <p>time{clickCount !== 1 ? 's' : ''}</p>
      </div>
      
      <button 
        className="netlify-button" 
        onClick={handleButtonClick}
      >
        {buttonText}
      </button>
      
      {clickCount > 0 && (
        <div className="confetti">
          {Array(20).fill(0).map((_, i) => (
            <div key={i} className="confetti-piece"></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
