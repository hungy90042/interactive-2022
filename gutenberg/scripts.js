// Page Variables
var numOfPages = 648;
var currentVerso = 350;
var currentRecto = currentVerso + 1;
var today = new Date(Date.now());

// Interview Text Variables
var pageInfoElement = document.querySelector(".pageInfo");
var interviewVersoElement = document.querySelector(".Interview--verso");
var interviewRectoElement = document.querySelector(".Interview--recto");
var interviewPageLength = Math.round(interviewText.length / numOfPages);
var interviewVersoTextSliced = interviewText.slice(
    currentVerso * interviewPageLength,
    currentVerso * interviewPageLength + interviewPageLength
);
var interviewRectoTextSliced = interviewText.slice(
    currentRecto * interviewPageLength,
    currentRecto * interviewPageLength + interviewPageLength
);

// Bible Text Variables
var currentVersoColumn = currentVerso * 6;
var currentRectoColumn = currentVersoColumn + 3;

var bibleVersoOneElement = document.querySelector(".Bible--versoOne");
var bibleVersoTwoElement = document.querySelector(".Bible--versoTwo");
var bibleRectoOneElement = document.querySelector(".Bible--rectoOne");
var bibleRectoTwoElement = document.querySelector(".Bible--rectoTwo");
var bibleColumnLength = Math.round(bibleText.length / numOfPages / 6);
var bibleVersoOneTextSliced = bibleText.slice(
    currentVersoColumn * bibleColumnLength,
    currentVersoColumn * bibleColumnLength + bibleColumnLength * 2
);
var bibleVersoTwoTextSliced = bibleText.slice(
    currentVersoColumn * bibleColumnLength + bibleColumnLength * 2,
    currentVersoColumn * bibleColumnLength + bibleColumnLength * 2 + bibleColumnLength
);
var bibleRectoOneTextSliced = bibleText.slice(
    currentRectoColumn * bibleColumnLength,
    currentRectoColumn * bibleColumnLength + bibleColumnLength
);
var bibleRectoTwoTextSliced = bibleText.slice(
    currentRectoColumn * bibleColumnLength + bibleColumnLength,
    currentRectoColumn * bibleColumnLength + bibleColumnLength + bibleColumnLength * 2
);

// Page Info Tex
var pageInfoText = `Today is ${today.toDateString()}. Current page number: ${currentVerso}`;

// Change DOM
pageInfoElement.innerText = pageInfoText;
interviewVersoElement.innerText = interviewVersoTextSliced;
interviewRectoElement.innerText = interviewRectoTextSliced;
bibleVersoOneElement.innerHTML = splitIntoSpans(bibleVersoOneTextSliced);
bibleVersoTwoElement.innerHTML = splitIntoSpans(bibleVersoTwoTextSliced);
bibleRectoOneElement.innerHTML = splitIntoSpans(bibleRectoOneTextSliced);
bibleRectoTwoElement.innerHTML = splitIntoSpans(bibleRectoTwoTextSliced);

function splitIntoSpans(text) {
    const splitText = text.split(". ");
    const spans = splitText.map(function (span) {
        return `<span class = "bibleVerse">${span}. </span>`;
    });
    return spans.join(" ");
}

setTimeout(function () {
window.location.reload(1);
}, 2500);
