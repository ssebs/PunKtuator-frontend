import React, { useState } from "react";

const LangSelector = props => {
    return (
        <div>
            <select
                name="lang"
                onChange={props.handleChange}
                defaultValue="english"
            >
                <option value="english">English</option>
                <option value="german">German</option>
                <option value="french">French</option>
            </select>
        </div>
    );
};

export default LangSelector;
