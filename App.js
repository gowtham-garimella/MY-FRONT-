// src/App.js
import React from 'react';
import './App.css';
import ItemsList from './ItemsList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Frontend</h1>
                <ItemsList />
            </header>
        </div>
    );
}

export default App;
