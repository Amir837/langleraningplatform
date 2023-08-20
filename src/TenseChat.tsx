/* Tense Chat */
import React, {ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

import { SentenceComponent } from './SentenceComponent';

import './css/TenseChat.css';

function TenseChat() {
    const [sentence, setSentence] = useState("She goes to the store to buy earrings.");

    return(
        <div className="tenseChatPage">
            <div className="leftBar">
                <div className="navMenu">
                </div>

                <div className="tenseController">

                </div>

                <div className="something">

                </div>
            </div>

            <div className="chat">
                <div className="sentenceTitle">

                </div>

                <div className="messageHistory">

                </div>

                <div className="chatInput">
                    
                </div>
            </div>
        </div>
    );
}

export { TenseChat };