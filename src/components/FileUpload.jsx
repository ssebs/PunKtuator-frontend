import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = props => {
    const onDrop = useCallback(acceptedFiles => {
        acceptedFiles.forEach(file => {
            const reader = new FileReader();

            reader.onabort = () => console.log("file reading was aborted");
            reader.onerror = () => console.log("file reading has failed");
            reader.onload = () => {
                // console.log(reader.result);
                props.setInputText(reader.result);
            };
            reader.readAsText(file);
        });
    }, [props]);
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

export default FileUpload;
