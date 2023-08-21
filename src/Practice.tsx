/* Practice page as a functional component */
import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

import { SentenceComponent } from './pages/Practice/SentenceComponent';

import './css/Practice.css';

function Practice() {
    const [sentence, setSentence] = useState("She goes to the store to buy earrings.");

    const [autoScroll, setAutoScroll] = useState(0);

    useEffect(() => {
        if (autoScroll < messages.length) {
            const container: HTMLElement | null = document.getElementById("message");
            if (container) {
                container.scrollTop = container.scrollHeight;
            }
        }
        setAutoScroll(messages.length);

        //if certain requirements are met, change the sentence 
        if ((languageSet1 !== languageSet2) && languageSet1 !== "" && languageSet2 !== "") {
            setSentence(languageSet1 + " First task " + languageSet2);
        }
    })

    //language timing
    const [languageSet1, setLanguageSet1] = useState("");
    const handleSelectChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguageSet1(event.target.value);
    };

    const languageTime1 =
        <div className="tense">
            <select className="selectStyle" name="languageTime1" onChange={handleSelectChange1} value={languageSet1}>
                <optgroup className="selectTextMain" label="Present">
                    <option className="selectText" value="pr1">Present Simple</option>
                    <option className="selectText" value="pr2">Present Continuous</option>
                    <option className="selectText" value="pr3">Present Perfect</option>
                    <option className="selectText" value="pr4">Present Perfect Continuous</option>
                </optgroup>
                <optgroup className="selectTextMain" label="Past">
                    <option className="selectText" value="pa1">Past Simple</option>
                    <option className="selectText" value="pa2">Past Continuous</option>
                    <option className="selectText" value="pa3">Past Perfect</option>
                    <option className="selectText" value="pa4">Past Perfect Continuous</option>
                </optgroup>
                <optgroup className="selectTextMain" label="Future">
                    <option className="selectText" value="fu1">Future Simple</option>
                    <option className="selectText" value="fu2">Future Continuous</option>
                    <option className="selectText" value="fu3">Future Perfect</option>
                    <option className="selectText" value="fu4">Future Perfect Continuous</option>
                </optgroup>
            </select>
        </div>;

    const [languageSet2, setLanguageSet2] = useState("");
    const handleSelectChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguageSet2(event.target.value);
    };

    const languageTime2 =
        <div className="tense">
            <select className="selectStyle" name="languageTime2" onChange={handleSelectChange2} value={languageSet2}>
                <optgroup className="selectTextMain" label="Present">
                    <option className="selectText" value="pr1">Present Simple</option>
                    <option className="selectText" value="pr2">Present Continuous</option>
                    <option className="selectText" value="pr3">Present Perfect</option>
                    <option className="selectText" value="pr4">Present Perfect Continuous</option>
                </optgroup>
                <optgroup className="selectTextMain" label="Past">
                    <option className="selectText" value="pa1">Past Simple</option>
                    <option className="selectText" value="pa2">Past Continuous</option>
                    <option className="selectText" value="pa3">Past Perfect</option>
                    <option className="selectText" value="pa4">Past Perfect Continuous</option>
                </optgroup>
                <optgroup className="selectTextMain" label="Future">
                    <option className="selectText" value="fu1">Future Simple</option>
                    <option className="selectText" value="fu2">Future Continuous</option>
                    <option className="selectText" value="fu3">Future Perfect</option>
                    <option className="selectText" value="fu4">Future Perfect Continuous</option>
                </optgroup>
            </select>
        </div>;

    const [inputValue, setInputValue] = useState("");
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };


    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addNewMessage(messages);
        }
    };

    interface Message {
        text: string;
        className: string;
    }
    const [messages, setMessages] = useState<Message[]>([]);

    function addNewMessage(prevMessages: Message[]) {

        const newMessage: Message = {
            text: inputValue,
            className: 'answer',
        };
        setMessages(prevMessages => [...prevMessages, newMessage])
        setInputValue('');
        getTeacherFeedback(messages);
    }

    var fromTense = "Present Simple";
    var toTense = "Past Simple";

    function getTeacherFeedback(prevMessages: Message[]) {
        return fetch(`https://flashenglish.azurewebsites.net/api/gptconnectionenglishtenseteacher?sentence=${sentence}&userInput=${inputValue}&fromTense=${fromTense}&toTense=${toTense}`)
            .then(response => response.json())
            .then(data => {
                const newMessage: Message = {
                    text: data.text,
                    className: 'question',
                };
                setMessages(prevMessages => [...prevMessages, newMessage])
            })
    }

    const translateSelected = (selectedText: string) => {
        fetch(`https://translateincontextazfunction.azurewebsites.net/api/translateincontext?context=${sentence}&selectedText=${selectedText}`).then(res => res.json()).then(data => console.log(data));
    };

    return (
        <div className="practicePage">
            <div className="aLotOfBooks" />
            <div className="text1">Transforming sentence from {languageTime1} to {languageTime2}</div>
            <div className="practiceChat">
                <div className="sentenceToTransform">
                    <span><div id="sentenceToTransform"><SentenceComponent translateSelected={translateSelected} wordList={sentence.split(" ")} originalLanguage="English" translatedLanguage='Russian' /></div></span>
                </div>
                <div className="barBetweenWhite"></div>
                <div className="chatBox" id="message">
                    <div className="TextContainer">
                        {messages.map((message) => {
                            return (
                                <div className={message.className}>
                                    {message.text}
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="barBetweenBlack"></div>
                <div className="inputBox">
                    <input
                        className="my-input"
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