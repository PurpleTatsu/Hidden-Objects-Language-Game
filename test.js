//randomly generates 7 Pokemon sprites and names


const checkAlert = async function () {
  const pokemonArray = [(Math.floor(Math.random() * 152)), (Math.floor(Math.random() * 152)), (Math.floor(Math.random() * 152)), (Math.floor(Math.random() * 152)), (Math.floor(Math.random() * 152)), (Math.floor(Math.random() * 152)), (Math.floor(Math.random() * 152))]
  const randArray = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];

  for (i = 0; i < pokemonArray.length; i++) {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonArray[i]}`);

    const pokeSprite = response.data.sprites.front_default;

    let pokemonLayer = document.querySelector('#pokemon');
    let pokemonImg = document.createElement("div");
    pokemonImg.classList.add("pokeId1");
    pokemonLayer.appendChild(pokemonImg);
    pokemonImg.innerHTML = `<img src="${pokeSprite}">`

    let list = document.querySelector("#list");
    let findList = document.createElement("ul");
    let findListItem = document.createElement("li");
    let pokeName = response.data.name;
    list.appendChild(findList);
    findList.appendChild(findListItem)
    findListItem.innerHTML = pokeName;
  }

  //SCORE
  let pokeId1Button = document.querySelector("#pokemon");
  let score = 0;
  pokeId1Button.addEventListener('click', async () => {
    score++
    console.log(score, "poke clicked");
  });
  
  // document.addEventListener('click', async (event) => {

  //   let newPokemonClass = document.querySelector('#pokemon');
  //   newPokemonClass.className += '.pokemonAll';
  //   console.log('clicked', event.path[0])
  //   checkAlert(newPokemonClass).innerHTML.remove()

  // });


};
checkAlert()






