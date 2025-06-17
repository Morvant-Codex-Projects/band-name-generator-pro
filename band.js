console.log("Name That Band");

const adjectives = ["Funky", "Loud", "Silent", "Electric", "Wicked", "Groovy", "Coded", "Notorious", "Amphibious"];

const nouns = ["Penguins", "Wizards", "Socks", "Robots", "Bananas", "Crows", "Ninjas", "Mamas", "Pearls"];


 function getAdjective() {
    const index = Math.floor(Math.random() * adjectives.length);
    return adjectives[index];
 // TODO: return a random adjective from the adjectives array
 }

 function getNoun() {
    const index = Math.floor(Math.random() * nouns.length);
    return nouns[index];
 // TODO: return a random noun from the nouns array
 }

 function generateBandName() {
    const adjective = getAdjective();
    const noun = getNoun();
// TODO: use getAdjective() and getNoun() to build a band name
 // Format: "The Adjective Noun"
 // Then update the DOM to show the band name inside #band-name
   const bandNameElement = document.getElementById("band-name");
   bandNameElement.textContent = 'The ' + getAdjective() + getNoun();
 }

 document.getElementById("generate-btn").addEventListener("click", generateBandName);