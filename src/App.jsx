import React, { useState } from "react";
import LangSelector from "./components/LangSelector";
import TextBoxes from "./components/TextBoxes";

import { testPunctuate } from "./API";

const App = () => {
    const [lang, setLang] = useState("english");
    const [inputText, setInputText] = useState("enter you're text here");
    const [outputText, setOutputText] = useState("TEST");

    const handleLangChange = e => {
        setLang(e.target.value);
    };

    const handleInputChange = e => {
        setInputText(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const RESTObj = {
            lang,
            text: inputText
        };
        // console.log(RESTObj);
        testPunctuate(RESTObj).then(r => {
            // console.log(r);
            setOutputText(r.text);
        });
    };

    return (
        <div className="center">
            <h1>Punctuator</h1>
            <LangSelector handleChange={handleLangChange} />
            <hr />
            <TextBoxes
                inputChange={handleInputChange}
                inputText={inputText}
                outputText={outputText}
            />
            <button onClick={handleSubmit}>Punctuate!</button>
        </div>
    );
};

export default App;
