// script.js

function countWordsAndMore() {
    var textInput = document.getElementById('textInput').value;

    var wordCount = textInput.split(/\s+/).filter(function(word) {
        return word.length > 0;
    }).length;

    var complicatedWordsCount = textInput.split(/\s+/).filter(function(word) {
        return word.length > 10;
    }).length;

    var totalSentences = textInput.split(/[.!?]/).filter(function(sentence) {
        return sentence.length > 0;
    }).length;

    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('complicatedWordsCount').textContent = complicatedWordsCount;
    document.getElementById('totalSentences').textContent = totalSentences;

}
