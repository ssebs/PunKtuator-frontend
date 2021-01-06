// Background script for Chrome extension

// TODO: Make this not a hack
const BASE_URL = "http://heaviside.parc.xerox.com:5000";

// To create a new tab...
// chrome.contextMenus.create({
//   title: "PunKtuate!",
//   contexts: ["selection"],
//   onclick: (info, tab) => {
//     const selectedText = info.selectionText;
//     const newUrl = BASE_URL + "/?q=" + encodeURIComponent(selectedText);
//     // chrome.tabs.create({ url: newUrl });
//   },
// });

// To replace inline
function mycallback(info, tab) {
    // console.log(tab);
    if (!tab) {
        return;
    }
    chrome.tabs.sendMessage(tab.id, { type: "getVal", value: null }, (val) => {
        if (chrome.runtime.lastError) {
            setTimeout(mycallback, 1000);
        } else {
            // console.log(`recv: ${val}`);

            // TOOD: Post to api & get response
            // const newVal = "__" + val + "__";
            fetch(`${BASE_URL}/punctuate`, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    input_text: val,
                    text_style: "written",
                }),
            })
                .then((r) => r.json())
                .then((resp) => {
                    console.log(resp);
                    // Send another message with new text
                    chrome.tabs.sendMessage(
                        tab.id,
                        { type: "setVal", value: resp.text },
                        (res) => {
                            console.log(res);
                        }
                    );
                })
                .catch((err) => {
                    console.error(err);
                });

            // // Send another message with new text
            // chrome.tabs.sendMessage(
            //   tab.id,
            //   { type: "setVal", value: newVal },
            //   (resp) => {
            //     console.log(resp);
            //   }
            // );
        }
    });
}

chrome.contextMenus.create({
    title: "PunKtuate!",
    contexts: ["selection", "editable"],
    onclick: mycallback,
});
