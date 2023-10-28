import './MainWindow.css';
import { ArrowButton, IFrameRotate } from './MainWindow.styles.js';
import arrowUp from '../res/arrowUp.png';
import arrowDown from '../res/arrowDown.png';
import arrowLeft from '../res/arrowLeft.png';
import arrowRight from '../res/arrowRight.png';
import { useState } from 'react';
import { getRotation, getRotationEnd } from '../controllers/apiControllers';

function MainWindow() {
  const [streamUrl, setStreamUrl] = useState();

  const handleUrlChange = (event) => {
    setStreamUrl(event.target.value)
  }

  const handleUpStart = () => {
    getRotation(streamUrl.slice(0, streamUrl.length-7), "up")
  } 

  const handleUpEnd = () => {
    getRotationEnd(streamUrl.slice(0, streamUrl.length-7))
  } 
  
  const handleDownStart = () => {
    getRotation(streamUrl.slice(0, streamUrl.length-7), "down")
  }

  const handleDownEnd = () => {
    getRotationEnd(streamUrl.slice(0, streamUrl.length-7))
  } 
  
  const handleLeftStart = () => {
    getRotation(streamUrl.slice(0, streamUrl.length-7), "left")
  } 

  const handleLeftEnd = () => {
    getRotationEnd(streamUrl.slice(0, streamUrl.length-7))
  } 
  
  const handleRightStart = () => {
    getRotation(streamUrl.slice(0, streamUrl.length-7), "right")
  } 

  const handleRightEnd = () => {
    getRotationEnd(streamUrl.slice(0, streamUrl.length-7))
  } 

  return (
    <div className="MainWindow">
      <input type="text" onChange={handleUrlChange}/>
      <IFrameRotate>
        <iframe width="320px" 
          height="240px" src={streamUrl} />
      </IFrameRotate>
      <table>
        <tr>
            <th></th>
            <th>
              <ArrowButton onMouseDown={handleUpStart} onClick={handleUpEnd}>
                <img src={arrowUp}></img>
              </ArrowButton>
            </th>
            <th></th>
        </tr>
        <tr>
            <td>
              <ArrowButton onMouseDown={handleDownStart} onClick={handleDownEnd}>
                <img src={arrowLeft}></img>
              </ArrowButton>
            </td>
            <td></td>
            <td>
              <ArrowButton onMouseDown={handleLeftStart} onClick={handleLeftEnd}>
                <img src={arrowRight}></img>
              </ArrowButton>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
              <ArrowButton onMouseDown={handleRightStart} onClick={handleRightEnd}>
                <img src={arrowDown}></img>
              </ArrowButton>
            </td>
            <td></td>
        </tr>
      </table>
    </div>
  );
}

export default MainWindow;
