import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global/index.css';
import App from './components/App';
import ClickSpark from './components/ClickSpark';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClickSpark
      sparkColor={getComputedStyle(document.documentElement).getPropertyValue('--text-primary')}
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <App />
    </ClickSpark>
  </React.StrictMode>
);
