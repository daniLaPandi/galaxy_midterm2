// this is javascript for the front-end
let characters = [];
let currentIndex = 0;

async function fetchCharacters() {
  try {
    const res = await fetch("/characters");
    characters = await res.json();
    showCharacter(currentIndex);
  } catch (err) {
    console.error("Failed to load characters:", err);
  }
}

function showCharacter(index) {
  if (!characters.length) return;

  const char = characters[index];
  const imageEl = document.getElementById("char-image");

  imageEl.style.opacity = 0;
  setTimeout(() => {
    imageEl.src = char.image || "starwars.jpeg";
    imageEl.style.opacity = 1;
  }, 200);

  document.getElementById("char-name").textContent = char.name;
  console.log('char.name');
  document.getElementById("char-id").textContent = "Character ID: " + (char.id || "Unknown");
  document.getElementById("char-species").textContent = "Species: " + (char.species || "Unknown");
  document.getElementById("char-gender").textContent = "Gender: " + (char.gender || "Unknown");
  document.getElementById("char-height").textContent = "Height: " + (char.height || "Unknown");
  document.getElementById("char-mass").textContent = "Mass: " + (char.mass || "Unknown");
  document.getElementById("char-homeworld").textContent = "Homeworld: " + (char.homeworld || "Unknown");
  document.getElementById("char-affiliations").textContent = "Affiliations: " + (char.affiliations?.join(", ") || "None");
  document.getElementById("char-masters").textContent = "Masters: " + (char.masters?.join(", ") || "None");
  document.getElementById("char-apprentices").textContent = "Apprentices: " + (char.apprentices?.join(", ") || "None");
  document.getElementById("char-wiki").href = char.wiki || "#";

  let features = [];
  if (char.droid) features.push(`Droid: ${char.droid.model} (${char.droid.manufacturer})`);
  if (char.cybernetics) features.push(`Cybernetics: ${char.cybernetics}`);
  if (char.skinColor) features.push(`Skin Color: ${char.skinColor}`);
  document.getElementById("char-features").textContent = "Special Features: " + (features.join(" | ") || "None");
}

// my buttonsssss
document.getElementById("next").addEventListener("click", () => {
  if (!characters.length) return;
  currentIndex = (currentIndex + 1) % characters.length;
  showCharacter(currentIndex);
});

document.getElementById("prev").addEventListener("click", () => {
  if (!characters.length) return;
  currentIndex = (currentIndex - 1 + characters.length) % characters.length;
  showCharacter(currentIndex);
});

document.getElementById("search-btn").addEventListener("click", () => {
  if (!characters.length) return;
  const name = document.getElementById("search").value.toLowerCase();
  const index = characters.findIndex(c => c.name.toLowerCase() === name);
  if (index !== -1) {
    currentIndex = index;
    showCharacter(currentIndex);
  } else {
    if (confirm("Character not found! return to index??")) {
      showCharacter(0);
    }
  }
  document.getElementById("search").value = '';

});

// initialize ooop
fetchCharacters();