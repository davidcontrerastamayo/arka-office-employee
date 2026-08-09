import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css'; // Asegúrate de que los estilos se importen correctamente

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('No root element found');
}

const root = ReactDOM.createRoot(rootElement);
root.render(<React.StrictMode><App /></React.StrictMode>);