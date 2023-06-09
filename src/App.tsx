import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Child } from './functionComponents';
import { ColorText } from './useStateHook';
import { Timer } from './useEffectHook';



function App() {

    const buttonName = "Button name";
    var text1: string = "Text 1";
    var text2: string = "Text 2";

    var VarChildern = <div>Childern</div>;

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    1-st version is comming soon :)
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <div id="learning">
                    {/*
                    <Button buttonName={buttonName} />
                    <Child text1={text1} text2={text2} children={VarChildern} />
                    */}
                    <ColorText />
                    <Timer />
                </div>
            </header>
        </div>
    );
}

export default App;
