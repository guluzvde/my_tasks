const btn = document.getElementById("recipe");
const recipeName = document.querySelector("h1");
const category = document.querySelector("h3");
const cuisine=document.querySelector("h4")
const instructions=document.querySelector("p")
const tags=document.querySelector(".tags")
const img=document.querySelector("img")
const instruct = document.querySelector(".instruct")
const video = document.querySelector("iframe")

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
      console.log(myRecipe);
      img.style.display="inline"
      img.src=`${myRecipe.strMealThumb}`
      recipeName.innerText=`${myRecipe.strMeal}`
      category.innerText=`Category: ${myRecipe.strCategory}`
      cuisine.innerText=`Cuisine: ${myRecipe.strArea}`
      instruct.style.display="inline";
      instructions.innerText=`Instruction: ${myRecipe.strInstructions}`
      video.src=`${myRecipe.strYoutube}`
      video.style.display="inline"
      // video.src=`${myRecipe.strYoutube}`
      btn.innerText="GENERATE NEW RECIPE"
      console.log(video.src);
console.log(myRecipe.strYoutube);

      if(myRecipe.strTags===null){

        tags.innerText=``
      }else{
        tags.innerText=`Tags: ${myRecipe.strTags}`
      }
    });
}




btn.addEventListener("click",generate)

