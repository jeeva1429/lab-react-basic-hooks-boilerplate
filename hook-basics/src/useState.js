import React from "react";
import { useState, useEffect } from "react";
import './App.css'
import {themeStyle } from './useContext'
export const ToggleTheme = React.createContext()


function UseState(){
  const [currLikes,setLikes] = useState(0);
  const [content, showContent] = useState(false)
  const [isdisplayed, showDisplay] = useState(false)

  useEffect(() => {alert('content button get clicked')},[content])

  const handleLikes = ()=>{
    setLikes(currLikes+1);
  }

  const handleBackGround= () => {
    showDisplay(!isdisplayed)
  }
  
  return (
    <ToggleTheme.Provider value={content}>
    <button className="toggle-btn" onClick={handleBackGround}>Toggle</button>
    <div style={themeStyle(isdisplayed)} className='container'>
        <div>
            {content && <p>Hello everyone</p>}
            <button onClick={() =>showContent(content => !content)}>Get Content</button>
        </div>
      <h3>{currLikes}</h3>
      <button onClick={handleLikes}>Likes Count</button>
    </div>
    </ToggleTheme.Provider>
  );
}
export default UseState

