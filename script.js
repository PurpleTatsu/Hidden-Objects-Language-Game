// text-to-speech API
apiKey = "DVdTwRrvM23YS9YS0w6J2a4d0gR3znn49luN0xOUlKdq"
apiURL = "https://stream.watsonplatform.net/text-to-speech/api"



let button = document.querySelector("#sprite-layer, img");



const checkAlert = async function () {
  let pokeId = Math.floor(Math.random() * 963);
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
  const pokeSprite = response.data.sprites.front_default;


  let spriteLayer = document.querySelector('#sprite-layer');
  let pokemonImg = document.createElement("div");
  spriteLayer.appendChild(pokemonImg);
  pokemonImg.innerHTML = `<img src="${pokeSprite}">`

  let list = document.querySelector("#list");
  let findList = document.createElement("li");
  let pokeName = response.data.name;
  list.appendChild(findList);
  findList.innerHTML = pokeName;



};

checkAlert()


button.addEventListener('click', async () => {
  // if (document.querySelector("#button").clicked === true) {
  //   score++ && pokeSprite.style.display === "none";
  // }
  // else { console.log("did you click the pokemon?") }
  let score = 0;
  while (score < 1) {
    score++
    console.log(score, "poke clicked");
  }
})






// if clicked score++ and display: none