import React, { useState } from "react";
import LangSelector from "./components/LangSelector";
import TextBoxes from "./components/TextBoxes";

import { testPunctuate } from "./API";

const App = () => {
    const [lang, setLang] = useState("english");
    const [inputText, setInputText] = useState("Enter your text here...");
    const [outputText, setOutputText] = useState("");

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
            <h1 className="mt-3">PunKtuator</h1>
            <br />
            <hr />
            <TextBoxes
                inputChange={handleInputChange}
                inputText={inputText}
                outputText={outputText}
            />
            <div className="d-flex justify-content-center">
                <LangSelector handleChange={handleLangChange} />
                <button onClick={handleSubmit} className="btn btn-primary mx-1">
                    Punctuate!
                </button>
            </div>
            <hr />
            <p>&copy;2019 Varnith Chordia &amp; Sebastian Safari </p>
        </div>
    );
};

export default App;
