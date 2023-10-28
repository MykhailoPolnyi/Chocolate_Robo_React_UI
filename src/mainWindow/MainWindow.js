import logo from '../res/logo.svg';
import './MainWindow.css';

function MainWindow() {
  return (
    <div className="MainWindow">
      <header className="MainWindow-header">
        <img src={logo} className="MainWindow-logo" alt="logo" />
        <p>
          Edit <code>src/MainWindow.js</code> and save to reload.
        </p>
        <a
          className="MainWindow-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MainWindow;
