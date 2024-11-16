import React from 'react';
import '../styles/ChatBot.css';

const ChatBot = () => {
  return (
    <div>
      
      <nav className="navbar">
        <img
          src="https://www.shutterstock.com/image-vector/ashok-pillar-symbol-icon-black-600nw-2422191035.jpg" 
          alt="ChatBot Icon"
          className="navbar-icon"
        />
        <h1 className="navbar-title">Indian Constitution ChatBot App</h1>
      </nav>

      {/* Main Content */}
      <div className="chatbot-container">
        <h1>This is chatbot</h1>
      </div>
    </div>
  );
};

export default ChatBot;
