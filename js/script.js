$( "document" ).ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
let words=
$(".input").val();
return 'words'.charAt(0);
$("#user").click(function() {
  // Convert string to lowercase

  $("#input").val("#word");
  let str =$("#word").val();
  str = str.toLowerCase();
  // Initialize array of vowels
  const vowels = ["a", "e", "i", "o", "u"];
  // Initialize vowel index to 0
  let vowelIndex = 0;

  if (vowels.includes(str[0])) {
    // If first letter is a vowel
    let result =str + "way";
    console.log(result);
  } else {
    // If the first letter isn't a vowel i.e is a consonant
    for (let char of str) {
      // Loop through until the first vowel is found
      if (vowels.includes(char)) {
        // Store the index at which the first vowel exists
        vowelIndex = str.indexOf(char);
        break;
      }
    }
    // Compose final string
    let result =str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    console.log(result);
  }
});
$("").text(" ");