import './MainWindow.css';
import { ArrowButton } from './MainWindow.styles.js';
import arrowUp from '../res/arrowUp.png';
import arrowDown from '../res/arrowDown.png';
import arrowLeft from '../res/arrowLeft.png';
import arrowRight from '../res/arrowRight.png';


function MainWindow() {
  return (
    <div className="MainWindow">
      <table>
        <tr>
            <th></th>
            <th>
              <ArrowButton>
                <img src={arrowUp}></img>
              </ArrowButton>
            </th>
            <th></th>
        </tr>
        <tr>
            <td>
              <ArrowButton>
                <img src={arrowLeft}></img>
              </ArrowButton>
            </td>
            <td></td>
            <td>
              <ArrowButton>
                <img src={arrowRight}></img>
              </ArrowButton>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
              <ArrowButton>
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
