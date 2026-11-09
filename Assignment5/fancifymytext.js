function bigger(){
    document.getElementById("textArea").style.fontSize = "24pt";
}

function fancify(){
    let text = document.getElementById("textArea");

    if(document.getElementById("fancy").checked){
        text.style.fontWeight = "bold";
        text.style.color = "blue";
        text.style.textDecoration = "underline";
    } else {
        text.style.fontWeight = "normal";
        text.style.color = "black";
        text.style.textDecoration = "none";
    }
}

function moo(){
    let text = document.getElementById("textArea");

    // Convert text to uppercase
    let str = text.value.toUpperCase();

    //Split sentences by period
    let sentences = str.split(".");

    //Add -Moo to the last word of each sentence
    for (let i = 0; i < sentences.length; i++){
        let sentence = sentences[i].trim();

        if (sentence !== ""){
            let words = sentence.split(" ");

            words[words.length - 1] += "-Moo";

            sentences[i] = words.join(" ");
        }
    }

    //Join sentences
    text.value = sentences.join(".");
}