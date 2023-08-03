// Functional component: SentenceComponent
// Component description:
// 1. SentenceComponent is a component that displays a sentence.
// 2. It has next properties "sentence" that is a string, "originalLanguage" that is a string, "translatedLanguage" that is a string. 
// 3. It allows word/colocation selection.
// 4. Under the sentence, it displays option to translate selected part in context of the sentence.

import { useState } from 'react';
import './css/Sentence.css';

interface SentenceComponentProps {
    translateSelected: (selectedText: string) => void;

    wordList: string[];

    // Will need to create a map for the next properties
    originalLanguage: string;
    translatedLanguage: string;
}

function SentenceComponent(props: SentenceComponentProps) {
    const [leftOfSelected, setLeftOfSelected] = useState<number>(0);
    const [rightOfSelected, setRightOfSelected] = useState<number>(0);

    if (leftOfSelected !== 0 && leftOfSelected === rightOfSelected) {
        setLeftOfSelected(0);
        setRightOfSelected(0);
    }

    const selectWord = (wordIndex: number) => {
        if (rightOfSelected === wordIndex) {
            setRightOfSelected(wordIndex + 1);
        }
        else if (leftOfSelected - 1 == wordIndex) {
            setLeftOfSelected(wordIndex);
        }
        else if (rightOfSelected - 1 == wordIndex) {
            setRightOfSelected(wordIndex);
        }
        else if (leftOfSelected == wordIndex) {
            setLeftOfSelected(wordIndex + 1);
        }
        else {
            setLeftOfSelected(wordIndex);
            setRightOfSelected(wordIndex + 1);
        }
    }

    const handleClick = () => {
        props.translateSelected(props.wordList.slice(leftOfSelected, rightOfSelected).join(" "));
    }

    function SelectedPart(props: {selectedList: string[] }) {
        return (
            <span className="selected">
                <span> </span>
                {props.selectedList.map((word, index) => {
                    if (props.selectedList.length > 0){
                        return (
                            <span
                                key={leftOfSelected + index}
                                onClick={selectWord.bind(null, (leftOfSelected + index))}
                            >{word} </span>
                        );
                    }
                })}
            </span>
        );
    }

    return (
        <div className="planningBackground">
            <div className="sentence">
                {props.wordList.slice(0, leftOfSelected).map((word, index) => {
                    return (
                        <span key={index}>
                            <span
                                onClick={selectWord.bind(null, index)}
                                className={"normal"}
                            >{word}</span>
                            {index < (leftOfSelected - 1) ? <span> </span> : null}
                        </span>
                    );
                })}

                <SelectedPart
                    selectedList={props.wordList.slice(leftOfSelected, rightOfSelected)}
                />

                {props.wordList.slice(rightOfSelected).map((word, index) => {
                    return (
                        <span key={rightOfSelected + index}>
                            <span
                                onClick={selectWord.bind(null, rightOfSelected + index)}
                                className={"normal"}
                            >{word}</span>
                            {index < (props.wordList.length - 1) ? <span> </span> : null}
                        </span>
                    );
                })}
            </div>
            <div>
                <button onClick={handleClick}>Translate in context of the sentence</button>

                {/*Idea: Clear selected when usesr clicked somewhere else*/}
            </div>
        </div>
    );
}

export { SentenceComponent }; 