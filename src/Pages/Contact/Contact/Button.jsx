import React, { useState } from 'react';

function MyButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Reset the button state after a delay
    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto mt-10">
      <button
        id="button"
        className={`px-6 py-2 rounded-full border-2 border-green-500 ${
          isClicked ? 'bg-green-500 text-white' : 'bg-white text-green-500'
        } font-bold text-sm hover:bg-green-500 hover:text-white focus:outline-none transition-all duration-300`}
        onClick={handleClick}
        disabled={isClicked}
      >
        {isClicked ? 'SUBMITTING' : 'SUBMIT'}
      </button>
    </div>
  );
}

export default MyButton;
