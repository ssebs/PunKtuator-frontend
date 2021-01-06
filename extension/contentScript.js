// contentScript.js
let elem = null;
let theText = null;

document.addEventListener(
    "contextmenu",
    (e) => {
        elem = document.activeElement;
        let startPos = elem.selectionStart;
        let endPos = elem.selectionEnd;
        theText = elem.value.substring(startPos, endPos);

        // console.log(theText);
    },
    true
);

function replaceSelectedText(elem, text) {
    var txtArea = elem;
    if (txtArea.selectionStart != undefined) {
        var startPos = txtArea.selectionStart;
        var endPos = txtArea.selectionEnd;

        let newTxt =
            txtArea.value.slice(0, startPos) +
            text +
            txtArea.value.slice(endPos);

        // const selectedText = txtArea.value.substring(startPos, endPos);
        // console.log(text);
        // console.log(selectedText);
        // console.log(newTxt);

        txtArea.value = newTxt;
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type == "getVal") {
        // console.log("getval");
        sendResponse(theText);
    }
    if (request.type == "setVal") {
        // console.log("setval");
        // console.log(request.value);

        replaceSelectedText(elem, request.value);
    }
    return true;
});
