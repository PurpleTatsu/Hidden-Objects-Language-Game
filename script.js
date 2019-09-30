// text-to-speech API
apiKey = "DVdTwRrvM23YS9YS0w6J2a4d0gR3znn49luN0xOUlKdq"
apiURL = "https://stream.watsonplatform.net/text-to-speech/api"


document.querySelector("#tv").addEventListener("click", function () {
  console.log("テレビ")
});
document.querySelector("#table").addEventListener("click", function () {
  console.log("テーブル")
});
document.querySelector("#couch").addEventListener("click", function () {
  console.log("ソファ")
});
document.querySelector("#plant").addEventListener("click", function () {
  console.log("植物")
});


// const checkAlert = async function () {
//   let response = await axios.get(`https://api.adviceslip.com/advice`);
//   console.log(response.data.slip.advice);

// };

// checkAlert()
const list = document.querySelector("#aside");


const checkAlert = async function () {
  let pokeId = Math.floor(Math.random() * 963);
  let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
  // let pokeNames = response.data
  // console.log(pokeNames[20])
  const pokeSprite = response.data.sprites.front_default;
  console.log(pokeSprite)
  const pokemonSection = document.querySelector('#sprite');
  pokemonSection.innerHTML = `<img src="${pokeSprite}">`
};

checkAlert()





// sprites.front_default