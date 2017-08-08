
function convertJson(data){
  return data.json();
}

function convertObject(data){
  console.log(data)

  let recipes = "";

for(i = 0; i < data.results.length; i++){
  console.log(data.results[i].title)
  console.log(data.results[i].thumbnail)
  console.log(data.results[i].ingredients)

  recipes += `
    <div>
      <h2>${data.results[i].title}</h2>
      <p>${data.results[i].ingredients}</p>
      <img src="${data.results[i].thumbnail}">
    </div>
  `;
}

  let searchResults = document.querySelector(".result")
  searchResults.innerHTML = searchResults.innerHTML + recipes

}




fetch("https://recipepuppyproxy.herokuapp.com/api/?q=omelet")
  .then(convertJson)
  .then(convertObject);
