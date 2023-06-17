import React, {ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import './App.css';
import styled from "styled-components";
/*import './PracticePage/div-body.css'
import './PracticePage/slideshow.css'
import './PracticePage/topMenu.css'
import './PracticePage/wrapper.css'
import './body.css'*/
import './css/Chat.css'
import { error } from "console";

function App() {
    const [firstQuestion, setFirstQuestion] = useState("");
    useEffect(() => {
        setFirstQuestion("First task");
    })

    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            //действия, при нажатии enter
            addNewMessage(messages);
        }
    };

    const [messages, setMessages] = useState<string[]>([]);

    function addNewMessage(prevMessages:string[]){
        setMessages(prevMessages => [...prevMessages, inputValue])
        setInputValue('');
        addNewAnswer(messages);
    }
    
    function addNewAnswer(prevMessages:string[]){
        return fetch(`https://flashenglish.azurewebsites.net/api/gptconnectionenglishtenseteacher?sentence=${firstQuestion}&userInput=${inputValue}`)
        .then(response => response.json())
        .then(data => {
            setMessages(prevMessages => [...prevMessages,(data.text)])
        })
    }

    return (
        <div className="App">
            <div className="Chatik">
                <h1></h1>
                <h2>Чатик</h2> 
                <div id="sentenceToTransform">{firstQuestion}</div>
                <div id="message">
                    {messages.map((message) => {
                        return(
                            <div>
                                {message}
                            </div>
                        );
                    })}
                </div>

                <div className = "textinfo"> 
                    <input
                        type="text"
                        placeholder="..."
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                </div>
            </div>
        </div> 
    );
}
/*<div className="slide-out-text">
    <span>
        <h5>rely only on yourself</h5>
    </span>
</div>*/
export default App;