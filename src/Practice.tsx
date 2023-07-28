/* Practice page as a functional component */
import React, {ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

import { SentenceComponent } from './SentenceComponent';

import './css/Practice.css';

function Practice() {
    function autoScroll() {
        window.scrollBy(0, 1);
        if (window.innerHeight + window.scrollY < document.body.offsetHeight) {
            setTimeout(autoScroll, 10);
        }
    }
    window.onload = function() {
        //autoScroll();
    };
    
    const [firstQuestion, setFirstQuestion] = useState("");
    useEffect(() => {
        //при выполнении определенных требований, сменить предложение 
        if ((languageSet1 !== languageSet2) && languageSet1 !== "" && languageSet2 !== "") {
            setFirstQuestion(languageSet1 + " First task " + languageSet2);
        }
    })

    //выбор времени языка
    const [languageSet1, setLanguageSet1] = useState("");
    const handleSelectChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguageSet1(event.target.value);
    };
      
    const languageTime1 = 
        <div className="Tense">
        <select className="SelectStyle" name="languageTime1" onChange={handleSelectChange1} value={languageSet1}>
        <optgroup className="SelectTextMain" label="Present">
            <option className="SelectText" value="pr1">Present Simple</option>
            <option className="SelectText" value="pr2">Present Continuous</option>
            <option className="SelectText" value="pr3">Present Perfect</option>
            <option className="SelectText" value="pr4">Present Perfect Continuous</option>
        </optgroup>
        <optgroup className="SelectTextMain" label="Past">
            <option className="SelectText" value="pa1">Past Simple</option>
            <option className="SelectText" value="pa2">Past Continuous</option>
            <option className="SelectText" value="pa3">Past Perfect</option>
            <option className="SelectText" value="pa4">Past Perfect Continuous</option>
        </optgroup>
        <optgroup className="SelectTextMain" label="Future">
            <option className="SelectText" value="fu1">Future Simple</option>
            <option className="SelectText" value="fu2">Future Continuous</option>
            <option className="SelectText" value="fu3">Future Perfect</option>
            <option className="SelectText" value="fu4">Future Perfect Continuous</option>
        </optgroup>
        </select>
        </div>;

    const [languageSet2, setLanguageSet2] = useState("");
    const handleSelectChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguageSet2(event.target.value);
    };

    const languageTime2 = 
        <div className="Tense">
        <select className="SelectStyle" name="languageTime2" onChange={handleSelectChange2} value={languageSet2}>
        <optgroup className="SelectTextMain" label="Present">
            <option className="SelectText" value="pr1">Present Simple</option>
            <option className="SelectText" value="pr2">Present Continuous</option>
            <option className="SelectText" value="pr3">Present Perfect</option>
            <option className="SelectText" value="pr4">Present Perfect Continuous</option>
        </optgroup>
        <optgroup className="SelectTextMain" label="Past">
            <option className="SelectText" value="pa1">Past Simple</option>
            <option className="SelectText" value="pa2">Past Continuous</option>
            <option className="SelectText" value="pa3">Past Perfect</option>
            <option className="SelectText" value="pa4">Past Perfect Continuous</option>
        </optgroup>
        <optgroup className="SelectTextMain" label="Future">
            <option className="SelectText" value="fu1">Future Simple</option>
            <option className="SelectText" value="fu2">Future Continuous</option>
            <option className="SelectText" value="fu3">Future Perfect</option>
            <option className="SelectText" value="fu4">Future Perfect Continuous</option>
        </optgroup>
        </select>
        </div>;
    
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

    interface Message {
        text: string;
        className: string;
    }
    const [messages, setMessages] = useState<Message[]>([]);

    function addNewMessage(prevMessages:Message[]){
        
        const newMessage: Message = {
            text: inputValue,
            className: 'Answer',
        };
        setMessages(prevMessages => [...prevMessages, newMessage])
        setInputValue('');
        addNewAnswer(messages);
    }
    
    function addNewAnswer(prevMessages:Message[]){
        return fetch(`https://flashenglish.azurewebsites.net/api/gptconnectionenglishtenseteacher?sentence=${firstQuestion}&userInput=${inputValue}`)
        .then(response => response.json())
        .then(data => {
            const newMessage: Message = {
                text: data.text,
                className: 'Question',
            };
            setMessages(prevMessages => [...prevMessages,newMessage])
        })
    }

    return(
        <div className="practicePage">
            <div className="aLotOfBooks" />
                <div className="Text1">Transform this sentence from {languageTime1} to {languageTime2}</div>
                <div className="practiceChat">
                    <div className="ChatBox">
                        <div className="Task" id="sentenceToTransform">{firstQuestion}</div>
                        <div id="message">
                            {messages.map((message) => {
                                return(
                                    <div className={message.className}>
                                        {message.text}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="BarBetween"></div>
                    <div> 
                        <input
                            className = "my-input"
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

export { Practice };