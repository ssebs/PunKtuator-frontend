import React, { useState } from "react";
import LangSelector from "./components/LangSelector";
import TextBoxes from "./components/TextBoxes";

import { doPunctuate } from "./API";

const App = () => {
    const [lang, setLang] = useState("english");
    const [inputText, setInputText] = useState("Enter your text here...");
    const [outputText, setOutputText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const RESTObj = {
            language: lang,
            input_text: inputText
        };
        // console.log(RESTObj);
        doPunctuate(RESTObj).then(r => {
            // console.log(r);
            setOutputText(r.text);
        });
    };

    return (
        <div className="text-center">
            <h1 className="my-3">PunKtuator</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <TextBoxes
                    inputChange={e => setInputText(e.target.value)}
                    inputText={inputText}
                    outputText={outputText}
                />
                <div className="d-flex justify-content-center">
                    <LangSelector handleChange={e => setLang(e.target.value)} />
                    <button type="submit" className="btn btn-primary mx-1">
                        Punctuate!
                    </button>
                </div>
            </form>
            <hr />
            <p>&copy;2020 Varnith Chordia &amp; Sebastian Safari </p>
        </div>
    );
};

export default App;
