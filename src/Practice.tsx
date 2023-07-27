/* Practice page as a functional component */

import { SentenceComponent } from './SentenceComponent';

import './css/Practice.css';

function Practice() {
    const sentence = ["I", "am", "a", "sentence", "to", "transform"];

    const translateSelected = (selectedList: string[]) => {
        console.log(selectedList);
    };

    return(
        <div className="practicePage">
            <div className="aLotOfBooks" />

            <div className="practiceChat">
                <div className="sentenceToTransform">
                    <span>Transform next sentence: </span>
                    <span><SentenceComponent translateSelected={translateSelected} wordList={sentence} originalLanguage="English" translatedLanguage='Russian'/></span>
                </div>
            </div>
        </div>
    );
}

export { Practice };