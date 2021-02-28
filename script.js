// Use the skeleton bellow as a basis for your script
var generateBtn = document.querySelector("#magic-btn");

function displayMagicPhrase() {
  var magicPhrase = makeSomeMagic();
  var magicPhraseDisplay = document.querySelector("#magic-phrase");

  magicPhraseDisplay.value = magicPhrase;
}

// Attach event listener to the magi button
generateBtn.addEventListener("click", displayMagicPhrase);

    const magic = document.getElementById("magic-btn");
 magic.addEventListener('click', (event) => {
  // Callback
  event.currentTarget.innerText = 'fake news';
  });
