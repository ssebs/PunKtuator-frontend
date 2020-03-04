// API.js - API helper

const BASE_URL = "http://heaviside.parc.xerox.com:5000";

export const doPunctuate = obj => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/punctuate`, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(obj)
        })
            .then(r => r.json())
            .then(resp => {
                console.log(resp);
                resolve(resp);
            })
            .catch(err => {
                console.error(err);
                reject(err);
            });
    });
};

export const testPunctuate = obj => {
    return new Promise((resolve, reject) => {
        // en, de, fr
        if (obj.lang === "english") {
            resolve({ text: `Oi,${obj.text}, mate!` });
        } else if (obj.lang === "german") {
            resolve({ text: `Was brauchen Sie? ${obj.text}, ja!` });
        } else if (obj.lang === "french") {
            resolve({ text: `Non, ${obj.text}, oui-oui!` });
        } else {
            reject("Lang not supported");
        }
    });
};


export const testAnnotate = obj => {
    return new Promise((resolve, reject) => {
        resolve({ text: "Thanks, we'll use that to train the model soon." });
    });
};