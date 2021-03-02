// Use the skeleton bellow as a basis for your script
var generateBtn = document.querySelector("#magic-btn");

function makeSomeMagic() {
  var youLikeComputers = confirm("Do you like computers?");
  var youLikeSport = confirm("Do you like to do sports?");
  var youLikePuzzles = confirm("Do you like to solve puzzles?");
  var youLikePets = confirm("Do you love pets?");
  var youLikePizza = confirm("Do you eat Pizza?");
  var youlikeDancing = confirm("Do you like Dancing?");

  if (
    youLikeComputers &&
    !youLikeSport &&
    youLikePuzzles &&
    !youLikePets &&
    !youLikePizza &&
    !youlikeDancing
  ) {
    return "You will make a great developer my friend. Just keep on coding!";
  } else {
    return "Your future is doomed. But hey you can always try again :)";
  }
}

function displayMagicPhrase() {
  var magicPhrase = makeSomeMagic();
  var magicPhraseDisplay = document.querySelector("#magic-phrase");

  magicPhraseDisplay.value = magicPhrase;
}

// Attach event listener to the magic button
generateBtn.addEventListener("click", displayMagicPhrase);
