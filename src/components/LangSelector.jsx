import React from "react";

const LangSelector = props => {
    return (
        <select
            name="lang"
            onChange={props.handleChange}
            defaultValue="english"
            className="form-control d-inline-block w-auto mx-1"
        >
            <option value="english">English</option>
            <option value="german">German</option>
            <option value="french">French</option>
        </select>
    );
};

export default LangSelector;
