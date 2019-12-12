import React from "react";

const TextBoxes = props => {
    return (
        <div className="textboxcontainer">
            <div className="textboxhalf">
                <h3>Input</h3>
                <textarea
                    className="textbox"
                    defaultValue={props.inputText}
                    onChange={props.inputChange}
                ></textarea>
            </div>
            <div className="textboxhalf">
                <h3>Output</h3>
                <textarea
                    className="textbox"
                    value={props.outputText}
                    onChange={props.outputChange}
                    disabled
                ></textarea>
            </div>
        </div>
    );
};

export default TextBoxes;
