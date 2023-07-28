/* Practice page as a functional component */

import { SentenceComponent } from './SentenceComponent';

import './css/Practice.css';

function Practice() {
    const sentence = "She goes to the store to buy earrings.";

    const translateSelected = (selectedText: string) => {
        fetch(`https://translateincontextazfunction.azurewebsites.net/api/translateincontext?context=${sentence}&selectedText=${selectedText}`).then(res => res.json()).then(data => console.log(data));
    };

    return(
        <div className="practicePage">
            <div className="aLotOfBooks" />

            <div className="practiceChat">
                <div className="sentenceToTransform">
                    <span>Transform next sentence: </span>
                    <span><SentenceComponent translateSelected={translateSelected} wordList={sentence.split(" ")} originalLanguage="English" translatedLanguage='Russian'/></span>
                </div>
            </div>
        </div>
    );
}

export { Practice };