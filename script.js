// Use the skeleton bellow as a basis for your script
const generateBtn = document.querySelector("#magic-btn");

function makeSomeMagic() {
  let youLikeComputers = confirm("Do you like computers?");
  let youLikeSport = confirm("Do you like to do sports?");
  let youLikePuzzles = confirm("Do you like to solve puzzles?");
  let youLikePets = confirm("Do you love pets?");
  let youLikePizza = confirm("Do you eat Pizza?");
  let youlikeDancing = confirm("Do you like Dancing?");

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
  let magicPhrase = makeSomeMagic();
  let magicPhraseDisplay = document.querySelector("#magic-phrase");

  magicPhraseDisplay.value = magicPhrase;
}

// Attach event listener to the magic button
generateBtn.addEventListener("click", displayMagicPhrase);
