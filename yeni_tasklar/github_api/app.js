const form = document.getElementById("axtar");
const input = document.querySelector("input")
const submitBtn = document.querySelector("button")
const profile= document.querySelector(".profile")
const img = document.querySelector("img")
const userName= document.querySelector(".name")
const userLogin= document.querySelector(".login")
const izleyiciler = document.querySelector(".izleyenler")
const followers=document.querySelector(".fols")
const following=document.querySelector(".foling")
const biography = document.querySelector(".bio")
const repos=document.querySelector(".repos")

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
  let user;

  search=(e)=>{
    let login=input.value
    request.get(`https://api.github.com/users/${login}`).then((data)=>{
        user=data
        if(user.login===undefined){
            userLogin.innerHTML=`@${user.login}`
            followers.style.display=`none`
            following.style.display=`none`
            biography.style.display=`none`
            repos.style.display=`none`
            img.style.display=`none`
            input.value=""
            userName.innerHTML="ISTIFADƏÇİ TAPILMADI"
        }else{

            img.src=`${user.avatar_url}`
            img.style.height="150px"
            if(user.name==null){
    
                userName.innerHTML=`${user.login}`
            }else{
    
                userName.innerHTML=`${user.name}`
            }
            userLogin.innerHTML=`@${user.login}`
            followers.innerHTML=`Followers: ${user.followers}`
            following.innerHTML=`Following: ${user.following}`
            biography.innerHTML=`${user.bio}`
            repos.innerHTML=`Repository: ${user.public_repos}`
            input.value=""
        }
        
//         let followers;
// request.get(`https://api.github.com/users/${login}/followers`).then((data)=>{
//              let followers=data
//         let follower= followers.forEach(element => element)
//         console.log(follower);
//         img.src=`${user.avatar_url}`
//         let folimg=document.createElement("img")
//         // folimg.src=`${followers.forEach(element => element)}`
//         // followers.forEach(element => element).avatar_url;
//         followersHead.style.display="inline"
//         folimg.style.height=`50px`
//         izleyiciler.appendChild(folimg)
        // console.log(followers);
    // })
    })
    e.preventDefault()
  }


  form.addEventListener("submit", search)

// function axtar(e){
//     let user=input.value
//     let url =`https://api.github.com/users/${user}`
// let promise = new Promise((response),(reject))
// promise=fetch(url).then(response=>response.json()).then(data=>data)
// console.log(promise);

     
//     e.preventDefault()
// }
