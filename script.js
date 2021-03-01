const generateBtn = document.querySelector("#btn-flat");

function makeSomeMagic() {
  const likesSports = confirm("Do you like to do sports?");
  const likesPuzzles = confirm("Do you like to make puzzles?");
  const likesPets = confirm("Do you like pets?");
  const likesPizza = confirm("Do you like piza?");

  if (likesPuzzles && !likesSports && !likesPets && likesPizza) {
    return "You will make a great developer my friend. Just keep on coding!";
  } else {
    return "dont worry my friend if Donald Trump can make it" :)";
  }
}

function displayMagicPhrase() {
  const magicPhrase = makeSomeMagic();
  const magicPhraseDisplay = document.querySelector("#magic-phase");

  magicPhraseDisplay.value = magicPhrase;
}

// Attach event listener to the magic button
generateBtn.addEventListener("click", displayMagicPhrase);
