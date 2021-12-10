import React from 'react';
import './style.css';
import Chat from './Chat';
import Loader from "react-loader-spinner";

export default function App() {
  return (
    <div className="mainSection">
      <div className="heading"></div>
      
      <Chat />
    </div>
  );
}
