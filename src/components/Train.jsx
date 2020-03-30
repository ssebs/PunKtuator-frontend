import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { doAnnotate } from "../API";

const Train = () => {
    const [inputText, setInputText] = useState(null);

    const MyDropzone = () => {
        const onDrop = useCallback(acceptedFiles => {
            acceptedFiles.forEach(file => {
                const reader = new FileReader();

                reader.onabort = () => console.log("file reading was aborted");
                reader.onerror = () => console.log("file reading has failed");
                reader.onload = () => {
                    // console.log(reader.result);
                    setInputText(reader.result);
                };
                reader.readAsText(file);
            });
        }, []);
        const { getRootProps, getInputProps } = useDropzone({ onDrop });

        return (
            <div
                {...getRootProps()}
                style={{ border: "1px #bbb dashed" }}
                className="w-50 m-auto"
            >
                <input {...getInputProps()} />
                Drag/Drop or click here to upload a text file.
            </div>
        );
    };

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
        <div className="container">
            <h3>Train the model</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="textbox"
                    value={inputText || ""}
                    onChange={e => setInputText(e.target.value)}
                ></textarea>
                <div className="my-3">
                    <MyDropzone />
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
