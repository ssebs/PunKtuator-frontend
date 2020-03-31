import React, { useState } from "react";
import TextBoxes from "./components/TextBoxes";

import { doPunctuate } from "./API";
import Train from "./components/Train";

const App = () => {
    const [inputText, setInputText] = useState("Enter your text here.");
    const [outputText, setOutputText] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const RESTObj = {
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
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                    >
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        id="train-tab"
                        data-toggle="tab"
                        href="#train"
                        role="tab"
                        aria-controls="train"
                        aria-selected="false"
                    >
                        Train
                    </a>
                </li>
            </ul>
            <hr />
            <div className="tab-content" id="myTabContent">
                <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                >
                    <form onSubmit={handleSubmit}>
                        <TextBoxes
                            inputChange={e => {
                                setInputText(e.target.value);
                                // Clear output if empty
                                if (e.target.value === "") {
                                    setOutputText("");
                                }
                            }}
                            inputText={inputText}
                            outputText={outputText}
                        />
                        <div className="d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn btn-primary"
                            >
                                Punctuate!
                            </button>
                        </div>
                    </form>
                </div>
                <div
                    className="tab-pane fade"
                    id="train"
                    role="tabpanel"
                    aria-labelledby="train-tab"
                >
                    <Train />
                </div>
            </div>
            <hr />
            <p>&copy;2020 Varnith Chordia &amp; Sebastian Safari </p>
        </div>
    );
};

export default App;
