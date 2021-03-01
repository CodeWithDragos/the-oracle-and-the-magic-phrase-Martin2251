const generateBtn = document.querySelector("#magic-btn");

function makeSomeMagic() {
  const likesSports = confirm("Do you like to do sports?");
  const likesPuzzles = confirm("Do you like to make puzzles?");
  const likesPets = confirm("Do you like pets?");
  const likesPizza = confirm("Do you like pizza?");
  const likesMusic =confirm("Do you like music ?");
  const likesChocolate = confirm("Do you like Chocolate?");

 if likesSports & likePuzzles & likesPets & likesPizza & likesMusic & likesChocolatelikesSports & likesPets & likesSports

 else


}

function displayMagicPhrase() {
  const magicPhrase = makeSomeMagic();
  const magicPhraseDisplay = document.querySelector("#magic-phrase");

  magicPhraseDisplay.value = magicPhrase;
}

// Attach event listener to the magi button
generateBtn.addEventListener("click", displayMagicPhrase);

