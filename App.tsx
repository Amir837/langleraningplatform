import React, {ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import './css/Chat.css'

function App() {
    const [firstQuestion, setFirstQuestion] = useState("");
    useEffect(() => {
        //при выполнении определенных требований, сменить предложение 
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

    return (
        <div className="App">
            <div className="Box">
                <div className="Chatik">
                    <div className="Text1">Чатик</div> 
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
        </div> 
    );
}
/*<div className="slide-out-text">
    <span>
        <h5>rely only on yourself</h5>
    </span>
</div>*/
export default App;