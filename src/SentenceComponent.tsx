// Functional component: SentenceComponent
// Component description:
// 1. SentenceComponent is a component that displays a sentence.
// 2. It has next properties "sentence" that is a string, "originalLanguage" that is a string, "translatedLanguage" that is a string. 
// 3. It allows word/colocation selection.
// 4. Under the sentence, it displays option to translate selected part in context of the sentence.

import { useState } from 'react';
import './css/Sentence.css';

interface SentenceComponentProps {
    wordList: string[];

    // Will need to create a map for the next properties
    originalLanguage: string;
    translatedLanguage: string;
}

function SentenceComponent(props: SentenceComponentProps) {
    const [leftIncludedPointerOfSelected, setLeftIncludedPointerOfSelected] = useState<number>(0);
    const [rightNotIncludedPointerOfSelected, setRightNotIncludedPointerOfSelected] = useState<number>(0);

    const selectWord = (wordIndex: number) => {
        if (rightNotIncludedPointerOfSelected === wordIndex) {
            setRightNotIncludedPointerOfSelected(wordIndex + 1);
        }
        else if (leftIncludedPointerOfSelected - 1 == wordIndex) {
            setLeftIncludedPointerOfSelected(wordIndex);
        }
        else if (rightNotIncludedPointerOfSelected - 1 == wordIndex) {
            setRightNotIncludedPointerOfSelected(wordIndex);
        }
        else if (leftIncludedPointerOfSelected == wordIndex) {
            setLeftIncludedPointerOfSelected(wordIndex + 1);
        }
        else {
            setLeftIncludedPointerOfSelected(wordIndex);
            setRightNotIncludedPointerOfSelected(wordIndex + 1);
        }
    }

    const translateSelected = () => {
        console.log("I translted and reurned the result to the parrent component (maybe by using class) :). Turn on your imagination :)");
    }

    const clearSelection = () => {
        setLeftIncludedPointerOfSelected(0);
        setRightNotIncludedPointerOfSelected(0);
    }

    return (
        <div className = "planningBackground">
            <div className = "sentence">
                {props.wordList.map((word, index) => {
                    return (<span
                        key={index}
                        onClick={selectWord.bind(null, index)}
                        className={(index >= leftIncludedPointerOfSelected && index < rightNotIncludedPointerOfSelected) ? "highlighted" : "normal" }
                    >{word} </span>);
                })}
            </div>
            <div>
                <button onClick={translateSelected}>Translate in context of the sentence</button>

                {/* Will need to change it from button to any non-button surface*/}
            </div>
        </div>
    );
}

export { SentenceComponent }; 