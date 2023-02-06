fetch("Bienecke Interviews_indexed.txt")
  .then(function (txt) {
    // we parse the file into a text
    return txt.text();
  })
  .then(function (result) {
    // we get the parsed text here as the result parameter
    // We use the split method to split the result by a specific character—"\n"—and get an array of the text back
    let splitTextIntoWords = result.split(" ");
    let splitText = result.split("\n");

    // console.log(splitText, splitTextIntoWords)
    // to traverse the array we use the square bracket notation to select the index we want
    let firstLine = splitText[0];
    let secondLine = splitText[1];

    // filter the collection to remove empty text strings
    splitText = splitText.filter(function (txt) {
      return txt;
    });

    console.log(splitTextIntoWords.sort());

    splitTextIntoWords = splitTextIntoWords.map(function (word) {
      return word.replace(/\n/g, "");
    });

    //     for (const word of splitTextIntoWords) {
    //       const paragraph = document.createElement("p");
    //       paragraph.textContent = word;
    //       document.body.appendChild(paragraph);
    //     }

    // sort by length of words lowest to hightest
    splitTextIntoWords.sort(function (first, next) {
      return first.length - next.length;
    });

    for (const word of splitTextIntoWords) {
      const paragraph = document.createElement("p");
      paragraph.textContent = word;
      document.body.appendChild(paragraph);
    }

    // the sort method sorts asc
    console.log(splitTextIntoWords);

    //  the sort method sorts desc
    // console.log(splitTextIntoWords.sort().reverse())
  })
  .catch((error) => {
    console.log(error.messsage);
  });
