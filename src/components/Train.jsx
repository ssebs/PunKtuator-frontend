import React, { useState } from "react";

import FileUpload from "./FileUpload";
import { doAnnotate } from "../API";

const Train = () => {
    const [inputText, setInputText] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        const RESTObj = {
            input_text: inputText
        };
        // console.log(RESTObj);
        doAnnotate(RESTObj)
            .then(r => {
                console.log(r);
                // Expecting a message here
                window.alert(r.text);
            })
            .catch(() => window.alert("Could not submit your text."));
    };

    return (
        <div className="container">
            <h3>Train the model</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="textbox"
                    value={inputText || ""}
                    onChange={e => setInputText(e.target.value)}
                ></textarea>
                <div className="my-3">
                    <FileUpload setInputText={setInputText} />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary mx-1">
                        Annotate!
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Train;
