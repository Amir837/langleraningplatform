import { ChangeEvent } from "react";

import './TenseController.css';

enum EnglishTenses {
    PrsSim = "Present Simple",
    PrsCont = "Present Continuous",
    PrsPerf = "Present Perfect",
    PrsPerfCont = "Present Perfect Continuous",

    PstSim = "Past Simple",
    PstCont = "Past Continuous",
    PstPerf = "Past Perfect",
    PstPerfCont = "Past Perfect Continuous",

    FutSim = "Future Simple",
    FutCont = "Future Continuous",
    FutPerf = "Future Perfect",
    FutPerfCont = "Future Perfect Continuous"
}

function TenseController(props: { currentTense: EnglishTenses, handleTenseChange: (event: ChangeEvent<HTMLSelectElement>) => void; }) {
    return (
        <div className="tenseController">
            <select className="selectStyle" name="languageTime2" onChange={props.handleTenseChange} value={props.currentTense}>
                <optgroup className="selectTextMain" label="Present">
                    <option className="selectText" value={EnglishTenses.PrsSim}>{EnglishTenses.PrsSim}</option>
                    <option className="selectText" value={EnglishTenses.PrsCont}>{EnglishTenses.PrsCont}</option>
                    <option className="selectText" value={EnglishTenses.PrsPerf}>{EnglishTenses.PrsPerf}</option>
                    <option className="selectText" value={EnglishTenses.PrsPerfCont}>{EnglishTenses.PrsPerfCont}</option>
                </optgroup>
                <optgroup className="selectTextMain" label="Past">
                    <option className="selectText" value={EnglishTenses.PstSim}>{EnglishTenses.PstSim}</option>
                    <option className="selectText" value={EnglishTenses.PstCont}>{EnglishTenses.PstCont}</option>
                    <option className="selectText" value={EnglishTenses.PstPerf}>{EnglishTenses.PstPerf}</option>
                    <option className="selectText" value={EnglishTenses.PstPerfCont}>{EnglishTenses.PstPerfCont}</option>
                </optgroup>
                <optgroup className="selectTextMain" label="Future">
                    <option className="selectText" value={EnglishTenses.FutSim}>{EnglishTenses.FutSim}</option>
                    <option className="selectText" value={EnglishTenses.FutCont}>{EnglishTenses.FutCont}</option>
                    <option className="selectText" value={EnglishTenses.FutPerf}>{EnglishTenses.FutPerf}</option>
                    <option className="selectText" value={EnglishTenses.FutPerfCont}>{EnglishTenses.FutPerfCont}</option>
                </optgroup>
            </select>
        </div>
    );
}

export { TenseController, EnglishTenses};