/* Tense Chat */
import React, {ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

import { SentenceComponent } from './SentenceComponent';

import './css/TenseChat.css';

function TenseChat() {
    const [sentence, setSentence] = useState("She goes to the store to buy earrings.");

    return(
        <div className="TenseChatPage">

        </div>
    );
}

export { TenseChat };