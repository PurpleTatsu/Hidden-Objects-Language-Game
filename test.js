//randomly generates 7 Pokemon sprites and names

alert(`Find all 7 Pokemon.`)
const checkAlert = async function () {
  const pokemonArray = [(Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152)), (Math.ceil(Math.random() * 152))]
  const randArray = pokemonArray[Math.ceil(Math.random() * pokemonArray.length)];

  for (i = 0; i < pokemonArray.length; i++) {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonArray[i]}`);

    const pokeSprite = response.data.sprites.front_default;

    let pokemonLayer = document.querySelector('#sprite-layer');
    let pokemonImg = document.createElement("div");
    pokemonImg.classList.add("pokeClass");
    pokemonLayer.appendChild(pokemonImg);
    pokemonImg.innerHTML = `<img src="${pokeSprite}">`

    let list = document.querySelector("#list");
    let findList = document.createElement("ul");
    let findListItem = document.createElement("li");
    let pokeName = response.data.name;
    list.appendChild(findList);
    findList.appendChild(findListItem)
    findListItem.innerHTML = pokeName;



    pokemonImg.addEventListener('click', async () => {

      pokemonImg.remove();
    });
  }

  //SCORE

  let pokeClassClicked = document.getElementsByClassName(`pokeClass`);
  let score = 0;
  for (let i = 0; i < pokeClassClicked.length; i++) {
    pokeClassClicked[i].addEventListener('click', function () {
      score++
      // alert(score, "poke clicked");
      document.querySelector(`#list h4`).innerHTML = "Score: " + score;
      if (score === 7) {
        alert(`Pokemon GETTO!`)
      }
    });
  }
  //remove pokemon



};
checkAlert()






