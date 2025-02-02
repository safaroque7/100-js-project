const submitButton = document.getElementById("submitButton");
const mainText = document.getElementById("mainText");

submitButton.addEventListener("click", function () {
  const text = document.getElementById("text").value;
  document.getElementById("mainText").innerHTML = text;

  //letter count
  totalText = text.replace(/[^a-zA-Z]/g, "");
  countLetter = totalText.length;
  document.getElementById("totalLetter").innerHTML = countLetter;

  //word count
  totalWord = text.split(/\s+/).filter(Boolean);
  countWord = totalWord.length;
  document.getElementById("totalWords").innerHTML = countWord;

  //sentence count
  // text2= text.replace(/[.]+$/, '');
  // setences1 = text2.split(/[.!?]\s+/);
  // setences2 = setences1.filter(sentence => sentence.trim() !== '');
  // totalSentences = setences2.length;
  // document.getElementById("totalSentence").innerHTML = totalSentences;

  // Remove any trailing dots
  const text2 = text.replace(/[.]+$/, '');

  // Split into sentences based on punctuation (.!?)
  const sentences1 = text2.split(/[.!?]\s+/);

  // Filter out any empty sentences
  const sentences2 = sentences1.filter(sentence => sentence.trim() !== '');

  // Count the total number of sentences
  const totalSentences = sentences2.length;

  // Display the sentence count in the HTML element with id "totalSentence"
  document.getElementById("totalSentence").innerHTML = totalSentences;


  // paragraphs count
  // Split text by newlines (which represents paragraph separation)
  const paragraphs = text.split(/\n+/);

  // Filter out any empty paragraphs (if there's extra line breaks)
  const nonEmptyParagraphs = paragraphs.filter(paragraph => paragraph.trim() !== '');

  // Get the number of paragraphs
  const totalParagraphs = nonEmptyParagraphs.length;

  // Display the total paragraph count
  document.getElementById("totalParagraph").innerHTML = totalParagraphs;

});