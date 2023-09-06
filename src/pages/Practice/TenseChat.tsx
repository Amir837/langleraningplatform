/* Tense Chat */
import React, { ChangeEvent, KeyboardEvent, useEffect, useState} from "react";

import { SentenceComponent } from "./SentenceComponent";
import { TenseController, EnglishTenses } from './TenseController';

import './TenseChat.css';

function TenseChat() {
    interface Message {
        text: string;
        className: string;
    }

    const fstSentence = "She goes to the store to buy earrings.";

    const [sentence, setSentence] = useState(fstSentence);
    const [fromTense, setFromTense] = useState<EnglishTenses>(EnglishTenses.PrsSim);
    const [toTense, setToTense] = useState<EnglishTenses>(EnglishTenses.PstSim);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    // Tenses
    const handleFromTenseChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setFromTense(event.target.value as EnglishTenses);
        event.target.blur();
    };

    const handleToTenseChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setToTense(event.target.value as EnglishTenses);
        event.target.blur();
    };

    const FromTense = <TenseController currentTense={fromTense} handleTenseChange={handleFromTenseChange} />;
    const ToTense = <TenseController currentTense={toTense} handleTenseChange={handleToTenseChange} />;

    // Next sentence
    const nextSent = sentence === fstSentence ? "He has been working for 10 hours." : fstSentence;
    const nextSentence = () => {
        setSentence(nextSent);
        /* Will need to create a new Az Function to generate a new sentence in fromTense */
    }

    // User input
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addNewMessage(messages);
        }
    };

    // Displaying new messages on the screen
    function addNewMessage(prevMessages: Message[]) {

        const newMessage: Message = {
            text: inputValue,
            className: 'v1', // temporary name for css class 
        };
        setMessages(prevMessages => [...prevMessages, newMessage])
        setInputValue('');
        getTeacherFeedback(messages);
    }

    // Getting feeadback on sentence transformation
    function getTeacherFeedback(prevMessages: Message[]) {
        return fetch(`https://flashenglish.azurewebsites.net/api/gptconnectionenglishtenseteacher?sentence=${sentence}&userInput=${inputValue}&fromTense=${fromTense}&toTense=${toTense}`)
            .then(response => response.json())
            .then(data => {
                const newMessage: Message = {
                    text: data.text,
                    className: 'v2',
                };
                setMessages(prevMessages => [...prevMessages, newMessage])
            })
    }

    const translateSelected = (selectedText: string) => {
        fetch(`https://translateincontextazfunction.azurewebsites.net/api/translateincontext?context=${sentence}&selectedText=${selectedText}`)
        .then(res => res.json())
        .then(data => {
            const newMessage: Message = {
                text: "It can be translated as: " + data.text,
                className: 'v2',
            };
            setMessages(prevMessages => [...prevMessages, newMessage])
        })
    };

    return (
        <div className="tenseChatPage">
            <div className="chat">
                <div className="sentenceTitleContainer">
                    <div className="exerciseTitle">Transform sentence from {FromTense} to {ToTense}</div>
                    <div className="taskBlock">
                        {/* <div><span className="attPointer">The sentence:</span> <span className="sentence">&nbsp;{sentence}&nbsp;</span></div> */}
                        <div><div className="attPointer notSelectable">The sentence:</div><span className="notSelectable">&nbsp;</span><SentenceComponent translateSelected={translateSelected} wordList={sentence.split(" ")} originalLanguage="English" translatedLanguage="Russian" /></div>
                        <button onClick={nextSentence}>Next sentence</button>
                    </div>
                </div>

                <div className="messageHistory">
                    {messages.map((message) => {
                        return (
                            <div className={"messageBox " + message.className}>
                                <div className="message">
                                    {message.text}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="userInput">
                    <input
                        className="input"
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

export { TenseChat };