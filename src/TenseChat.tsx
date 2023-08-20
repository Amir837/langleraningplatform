/* Tense Chat */
import React, {ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

import { SentenceComponent } from './SentenceComponent';

import './css/TenseChat.css';

function TenseChat() {
    interface Message {
        text: string;
        className: string;
    }

    const [sentence, setSentence] = useState("She goes to the store to buy earrings.");
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    // temporary
    var fromTense = "Present Simple";
    var toTense = "Past Simple";

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addNewMessage(messages);
        }
    };

    function addNewMessage(prevMessages:Message[]){
        
        const newMessage: Message = {
            text: inputValue,
            className: 'answer',
        };
        setMessages(prevMessages => [...prevMessages, newMessage])
        setInputValue('');
        getTeacherFeedback(messages);
    }

    function getTeacherFeedback(prevMessages:Message[]){
        return fetch(`https://flashenglish.azurewebsites.net/api/gptconnectionenglishtenseteacher?sentence=${sentence}&userInput=${inputValue}&fromTense=${fromTense}&toTense=${toTense}`)
        .then(response => response.json())
        .then(data => {
            const newMessage: Message = {
                text: data.text,
                className: 'question',
            };
            setMessages(prevMessages => [...prevMessages,newMessage])
        })
    }

    return(
        <div className="tenseChatPage">
            <div className="leftBar">
                <div className="navMenu">
                    navMenu
                </div>

                <div className="tenseController">

                </div>

                <div className="something">

                </div>
            </div>

            <div className="chat">
                <div className="sentenceTitleContainer">

                </div>

                <div className="messageHistory">

                </div>

                <div className="userInput">

                </div>
            </div>
        </div>
    );
}

export { TenseChat };