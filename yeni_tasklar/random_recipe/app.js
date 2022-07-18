const btn = document.getElementById("recipe");
const recipeName = document.querySelector("h1");
const category = document.querySelector("h3");
const cuisine=document.querySelector("h4")
const instructions=document.querySelector("p")
const tags=document.querySelector(".tags")
class Request {
  get(url) {
    return new Promise((resolve) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data));
    });
  }
}

const request = new Request();
let meals;
generate=()=>{
  request.get("https://themealdb.com/api/json/v1/1/search.php?f=a")
    .then((data) => {
      meals = data.meals;
      myRecipe= meals[Math.floor(Math.random()*meals.length)]
      recipeName.innerText=`${myRecipe.strMeal}`
      category.innerText=`Category: ${myRecipe.strCategory}`
      cuisine.innerText=`Cuisine: ${myRecipe.strArea}`
      instructions.innerText=`Instruction: ${myRecipe.strInstructions}`
      btn.innerText="GENERATE NEW RECIPE"
      if(myRecipe.strTags===null){

        tags.innerText=``
      }else{
        tags.innerText=`Tags: ${myRecipe.strTags}`
      }
    });
}




btn.addEventListener("click",generate)

