import React from 'react';
import logo from './logo.svg';
import './App.css';

import { SentenceComponent } from './SentenceComponent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <SentenceComponent wordList = {"1-st version is comming soon :)".split(" ")} originalLanguage = "en" translatedLanguage = "ru" />
            </header>
        </div>
    );
}

export default App;
