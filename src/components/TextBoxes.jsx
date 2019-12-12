import React from "react";

const TextBoxes = props => {
    return (
        <div className="textboxcontainer">
            <div>
                <h3>Input</h3>
                <textarea
                    defaultValue={props.inputText}
                    name="input"
                    onChange={props.inputChange}
                ></textarea>
            </div>
            <div>
                <h3>Output</h3>
                <textarea
                    name="input"
                    disabled
                    value={props.outputText}
                    onChange={props.outputChange}
                ></textarea>
            </div>
        </div>
    );
};

export default TextBoxes;
