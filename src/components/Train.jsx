import React, { useState } from "react";

import { testAnnotate, doAnnotate } from "../API";

const Train = () => {
    const [inputText, setInputText] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        const RESTObj = {
            input_text: inputText
        };
        // console.log(RESTObj);
        // testAnnotate(RESTObj).then(r => {
        //     // console.log(r);
        //     window.alert(r.text);
        // });
        doAnnotate(RESTObj).then(r => {
             console.log(r);
            window.alert(r.text);
        });
    };

    return (
        // <div className="textboxhalf">
        <div className="container">
            <h3>Train the model</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="textbox"
                    onChange={e => setInputText(e.target.value)}
                ></textarea>
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
