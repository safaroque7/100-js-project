let readingtimeId = document.getElementById("reading-time").innerHTML;
wordArray = readingtimeId.split(' ');
worLength = wordArray.length;
readingTime = worLength/200;
finalReadingTime = Math.ceil(readingTime);

document.getElementById("time-show").innerHTML = finalReadingTime;