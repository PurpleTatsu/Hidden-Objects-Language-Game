// text-to-speech API
apiKey = "DVdTwRrvM23YS9YS0w6J2a4d0gR3znn49luN0xOUlKdq"
apiURL = "https://stream.watsonplatform.net/text-to-speech/api"



const list = document.querySelector("#sprite-layer");


const checkAlert = async function () {
  let pokeId = Math.floor(Math.random() * 963);
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
  const pokeSprite = response.data.sprites.front_default;

  let spriteLayer = document.querySelector('#sprite-layer');
  let pokemonImg = document.createElement("div");
  spriteLayer.appendChild(pokemonImg);
  spriteLayer.innerHTML = `<img src="${pokeSprite}">`


  // const pokemonImg5 = document.querySelector('#sprite-layer');
  // pokemonImg5.innerHTML = `<img src="${pokeSprite}">`


  // let pokemonImg1 = `<img src="${pokeSprite}">`
  // pokeNode.appendChild(pokemonImg1)

  // document.querySelector("#sprite-layer").appendChild(pokeNode);
};

checkAlert()





// sprites.front_default