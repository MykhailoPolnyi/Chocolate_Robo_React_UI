import './MainWindow.css';
import { ArrowButton, IFrameRotate } from './MainWindow.styles.js';
import arrowUp from '../res/arrowUp.png';
import arrowDown from '../res/arrowDown.png';
import arrowLeft from '../res/arrowLeft.png';
import arrowRight from '../res/arrowRight.png';
import { useState } from 'react';
import { getRotationStart, getRotationStop } from '../controllers/apiControllers';

function MainWindow() {
  const [streamUrl, setStreamUrl] = useState();

  const handleUrlChange = (event) => {
    setStreamUrl(event.target.value)
  }

  const handleUpStart = () => {
    getRotationStart(streamUrl, "up")
  } 

  const handleUpEnd = () => {
    getRotationStop(streamUrl)
  } 
  
  const handleDownStart = () => {
    getRotationStart(streamUrl, "down")
  }

  const handleDownEnd = () => {
    getRotationStop(streamUrl)
  } 
  
  const handleLeftStart = () => {
    getRotationStart(streamUrl, "left")
  } 

  const handleLeftEnd = () => {
    getRotationStop(streamUrl)
  } 
  
  const handleRightStart = () => {
    getRotationStart(streamUrl, "right")
  } 

  const handleRightEnd = () => {
    getRotationStop(streamUrl)
  } 

  return (
    <div className="MainWindow">
      <input type="text" onChange={handleUrlChange}/>
      <IFrameRotate>
        <iframe width="320px" 
          height="240px" src={streamUrl+"/stream"} />
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
